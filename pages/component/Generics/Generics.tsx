import React, { memo, ReactNode } from "react";

interface IListProps {
  data?: IDataType[];
}

interface IDataType {
  name: string;
  age: string;
  id: string;
}

const DEFAULT_DATA: IDataType[] = [
  {
    age: "1",
    name: "2",
    id: "3",
  },
  {
    age: "2",
    name: "3",
    id: "4",
  },
];




interface IGenericsListProps<T> {
  data: T[];
  getKey: (data: T) => number;
  renderData: (data: T) => ReactNode;
}

/**
 *  泛型开发的主要场景:
 *  1、封装通用组件.  List 遍历组件.
 *  2、
 * **/

const GenericsList = <T extends unknown>({
  data,
  renderData,
  getKey,
}: IGenericsListProps<T>) => {
  return (
    <>
      {data.map((_data) => {
        return <div key={getKey(_data)}>{renderData(_data)}</div>;
      })}
    </>
  );
};

export default memo(GenericsList) as typeof GenericsList;
// export const Generics = ({ data = DEFAULT_DATA }: IListProps) => {
//   return (
//     <>
//       {data.map((_data) => {
//         return (
//           <div key={_data.id}>
//             <h1> {_data.name} </h1>
//           </div>
//         );
//       })}
//     </>
//   );
// };
