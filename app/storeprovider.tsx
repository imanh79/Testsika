"use client";
import store from "@/redux/app/store/store";
import { Store } from "@reduxjs/toolkit";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
