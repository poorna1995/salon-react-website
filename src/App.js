import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter, //as Router,
  Routes,
  Route,
} from "react-router-dom";
import unauthRoutes from "./routes/unauthRoutes";
import NoMatchPath from "./components/NoMatch";
import { SnackbarProvider } from "notistack";
import CustomSuccessSnackbar from "components/common/Feedback/Snackbars/CustomSuccessSnackbar";
import authFetch from "utils/authFetch";
import { ADMIN_SERVICES, GENERAL_SERVICES } from "constants/API_URLS";
import { updateData } from "store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingBackdrop from "components/common/Loader/Backdrop/LoadingBackdrop";

function App() {
  const notistack = React.createRef();
  const company_domain = window.location.pathname.split("/")[1];
  const [isLoading, setIsLoading] = useState(false);
  const [noMatch, setNoMatch] = useState(false);
  const dispatch = useDispatch();

  const { company_logo } = useSelector((state) => state?.user?.masterCompany) || "";
  const updateIcon = () => {
    console.log("ran")
    const fav = document.getElementById("favicon");
    fav.href = company_logo;
  };

  const fetchCompanyDetails = () => {
    setIsLoading(true);
    const requestData = {
      company_id: "",
      admin_id: "",
      domain: company_domain,
    };
    authFetch(ADMIN_SERVICES.FETCH_MASTER_COMPANY, requestData)
      .then((res) => {
        setIsLoading(false);
        const { status, result } = res;
        if (status === "success") {
          setNoMatch(false);
          dispatch(updateData({ masterCompany: result }));
          fetchBranches(result.company_base_id);
        } else {
          console.log(res);
          setNoMatch(true);
        }
      })
      .catch((res) => {
        setNoMatch(true);
        setIsLoading(false);
        console.log(res);
      });
  };

  const fetchBranches = (company_base_id) => {
    setIsLoading(true);
    const requestData = {
      company_id: "",
      company_base_id: company_base_id,
    };
    authFetch(GENERAL_SERVICES.FETCH_COMPANY, requestData)
      .then((res) => {
        setIsLoading(false);
        const { status, result, message } = res;
        if (status === "success") {
          const branches = result.filter((item) => item.company_name !== "");
          dispatch(updateData({ branches: branches }));
          if (branches.length > 0) {
            fetchCategoriesData(branches[0].company_id);
          }
        } else {
          //   enqueueSnackbar(message, { variant: "error" });
        }
      })
      .catch((res) => {
        setIsLoading(false);
        console.log(res);
      });
  };

  const fetchCategoriesData = (company_id) => {
    setIsLoading(true);
    const requestData = {
      company_id: company_id,
      category_id: "",
    };
    authFetch(ADMIN_SERVICES.FETCH_AGGREGATED_CATEGORY, requestData)
      .then((res) => {
        setIsLoading(false);
        const { result, status, message } = res;
        if (status === "success") {
          const filteredResult = result.filter(
            (item) => item.service_list.length > 0
          );
          dispatch(updateData({ categories: filteredResult }));
        } else {
          // enqueueSnackbar(message, { variant: "error" });
        }
      })
      .catch((res) => {
        setIsLoading(false);
        const { message } = res;
        // enqueueSnackbar(message, { variant: "error" });
      });
  };

  useEffect(() => {
    fetchCompanyDetails();
  }, []);

  useEffect(() => {
    if (company_logo) {
      updateIcon();
    }
  }, [company_logo]);

  if (noMatch) {
    return <NoMatchPath />;
  }

  return (
    <div className="App">
      {/* <LoadingBackdrop open={isLoading} /> */}
      <SnackbarProvider
        autoHideDuration={3000}
        ref={notistack}
        maxSnack={3}
        preventDuplicate
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        content={(key, message) => {
          return <CustomSuccessSnackbar id={key} message={message} />;
        }}
      >
        <BrowserRouter>
          <Routes>
            {unauthRoutes.map((route) => {
              const { path, component: Component } = route;
              return <Route path={path} key={path} element={<Component />} />;
            })}

            <Route path="*" element={<NoMatchPath />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}

export default App;
