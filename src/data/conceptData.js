import useCallbackConcept from "./hooks/useCallback";
import useContextConcept from "./hooks/useContext";
import useEffectConcept from "./hooks/useEffect";
import useMemoConcept from "./hooks/useMemo";
import useReducerConcept from "./hooks/useReducer";
import useRefConcept from "./hooks/useRef";
import useStateConcept from "./hooks/useState";
import higherOrderComponentsConcept from "./components/higherOrderComponents";
const conceptData = {
  useState: useStateConcept,
  useEffect: useEffectConcept,
  useContext: useContextConcept,
  useReducer: useReducerConcept,
  useMemo: useMemoConcept,
  useCallback: useCallbackConcept,
  useRef: useRefConcept,
  
  hoc: higherOrderComponentsConcept,
};
export default conceptData;
