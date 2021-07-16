import { transactionChunkSize } from "../../utils/constants";

export const initialList = Array(transactionChunkSize).fill(null);

export const Skeleton = () => <div className="App-list__item App-list__item--skl"></div>;
