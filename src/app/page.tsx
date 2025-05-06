import { AppBarChart } from "@/components/AppBarChart";
import AppBarGraidentChart from "@/components/AppBarGradientChart";
import AppBarPieChart from "@/components/AppBarPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 ">
      <div className="bg-primary-foreground p-4 rounded-lg   lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg ">
        {" "}
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg ">
        <AppBarPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg "><TodoList/></div>
      <div className="bg-primary-foreground p-4 rounded-lg  lg:col-span-2 xl:col-span-1 2xl:col-span-2 ">
        <AppBarGraidentChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg ">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
};

export default Home;
