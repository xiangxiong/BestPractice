import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { GenericsList } from "./component/";
import { ICompanyDataType } from "./component/Types";

const Home: NextPage = () => {
  const DEFAULT_DATA: ICompanyDataType[] = [
    {
      companyName: "companyName",
      address: "address",
      id: 1,
    },
    {
      companyName: "companyName",
      address: "address",
      id: 2,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>Best Practice Of Fronted</div>
      <div>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://medium.com/@hamzazaheer721/generic-components-in-react-typescript-ea8e77735f84"
              rel="noreferrer"
            >
              Generic Components in React Typescript
            </a>
            <a className={styles.demo}>Demo</a>
          </li>
        </ul>
      </div>
      <div>
        {/* <Generics/> */}
        <GenericsList<ICompanyDataType>
          data={DEFAULT_DATA}
          getKey={(data) => data.id}
          renderData={({ companyName, address }) => {
            return (
              <>
                <p>Company: {companyName}</p>
                <p>address: {address}</p>
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Home;
