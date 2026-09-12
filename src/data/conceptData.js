import useCallbackConcept from "./hooks/useCallback";
import useContextConcept from "./hooks/useContext";
import useEffectConcept from "./hooks/useEffect";
import useMemoConcept from "./hooks/useMemo";
import useReducerConcept from "./hooks/useReducer";
import useRefConcept from "./hooks/useRef";
import useStateConcept from "./hooks/useState";
import higherOrderComponentsConcept from "./components/higherOrderComponents";

import mountingConcept from "./lifecycle/mounting";
import updatingConcept from "./lifecycle/updating";
import unmountingConcept from "./lifecycle/unmounting";
import lifecycleUseEffectConcept from "./lifecycle/lifecycleUseEffect";

import propsStateConcept from "./state-management/propsState";
import propDrillingConcept from "./state-management/propDrilling";
import contextApiConcept from "./state-management/contextApi";

import reduxConcept from "./redux/redux";
import reduxToolkitConcept from "./redux/reduxToolkit";
import zustandConcept from "./redux/zustand";

import customHooksConcept from "./advanced-react/customHooks";

import lazyLoadingConcept from "./performance/lazyLoading";
import codeSplittingConcept from "./performance/codeSplitting";
import chunkingConcept from "./performance/chunking";
import suspenseConcept from "./performance/suspense";
import virtualDomConcept from "./performance/virtualDom";
import reconciliationConcept from "./performance/reconciliation";
import reactFiberConcept from "./performance/reactFiber";
import renderingConcept from "./performance/rendering";
import diffingConcept from "./performance/diffing";

import reactRouterConcept from "./routing/reactRouter";
import dynamicRoutingConcept from "./routing/dynamicRouting";
import protectedRoutesConcept from "./routing/protectedRoutes";
import queryParamsConcept from "./routing/queryParams";

import ssrVsCsrConcept from "./ssr-csr/ssrVsCsr";
import seoConcept from "./ssr-csr/seo";
import ssrPerformanceConcept from "./ssr-csr/ssrPerformance";

import reactTestingLibraryConcept from "./testing-async/reactTestingLibrary";
import unitTestingConcept from "./testing-async/unitTesting";
import integrationTestingConcept from "./testing-async/integrationTesting";
import apiUseEffectConcept from "./testing-async/apiUseEffect";
import eventsConcept from "./testing-async/events";
import promisesConcept from "./testing-async/promises";
import timersConcept from "./testing-async/timers";
import fetchConcept from "./testing-async/fetch";
import axiosConcept from "./testing-async/axios";

import performanceOptimizationConcept from "./production/performanceOptimization";
import skeletonShimmerConcept from "./production/skeletonShimmer";
import assetOptimizationConcept from "./production/assetOptimization";
import htmlCssJsConcept from "./production/htmlCssJs";
import cdnServerConcept from "./production/cdnServer";
import stylingLibrariesConcept from "./production/stylingLibraries";
import accessibilityConcept from "./production/accessibility";
import securityConcept from "./production/security";

const conceptData = {
  useState: useStateConcept,
  useEffect: useEffectConcept,
  useContext: useContextConcept,
  useReducer: useReducerConcept,
  useMemo: useMemoConcept,
  useCallback: useCallbackConcept,
  useRef: useRefConcept,
  
  hoc: higherOrderComponentsConcept,

  mounting: mountingConcept,
  updating: updatingConcept,
  unmounting: unmountingConcept,
  "lifecycle-useEffect": lifecycleUseEffectConcept,

  "props-state": propsStateConcept,
  "prop-drilling": propDrillingConcept,
  "context-api": contextApiConcept,

  redux: reduxConcept,
  "redux-toolkit": reduxToolkitConcept,
  zustand: zustandConcept,

  "custom-hooks": customHooksConcept,

  "lazy-loading": lazyLoadingConcept,
  "code-splitting": codeSplittingConcept,
  chunking: chunkingConcept,
  suspense: suspenseConcept,
  "virtual-dom": virtualDomConcept,
  reconciliation: reconciliationConcept,
  "react-fiber": reactFiberConcept,
  rendering: renderingConcept,
  diffing: diffingConcept,

  "react-router": reactRouterConcept,
  "dynamic-routing": dynamicRoutingConcept,
  "protected-routes": protectedRoutesConcept,
  "query-params": queryParamsConcept,

  "ssr-vs-csr": ssrVsCsrConcept,
  seo: seoConcept,
  "ssr-performance": ssrPerformanceConcept,

  "react-testing-library": reactTestingLibraryConcept,
  "unit-testing": unitTestingConcept,
  "integration-testing": integrationTestingConcept,
  "api-useEffect": apiUseEffectConcept,
  events: eventsConcept,
  promises: promisesConcept,
  timers: timersConcept,
  fetch: fetchConcept,
  axios: axiosConcept,

  "performance-optimization": performanceOptimizationConcept,
  "skeleton-shimmer": skeletonShimmerConcept,
  "asset-optimization": assetOptimizationConcept,
  "html-css-js": htmlCssJsConcept,
  "cdn-server": cdnServerConcept,
  "styling-libraries": stylingLibrariesConcept,
  accessibility: accessibilityConcept,
  security: securityConcept,
};
export default conceptData;
