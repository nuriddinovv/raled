import React, { useContext } from "react";
import { LanguageContext } from "../../context/Context";

export default function About() {
  const { text } = useContext(LanguageContext);
  return <div>{text.about.text1}</div>;
}
