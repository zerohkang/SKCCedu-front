import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";
import Prototypes from "../components/Prototypes";

export default function usePrototypes() {
    const {prototypes} = useContext(AppStateContext);

    return prototypes;
}