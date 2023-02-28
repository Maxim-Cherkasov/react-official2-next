import React from "react";
import ReactDOM from "react-dom/client";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Cr from "../pages/conditionalRendering/cr.js";
import Profile from "../pages/start/Start.js";
import PropsChallenges from "./start/props-challenges.js";
import ListsProject from "../pages/reactMockup/RenderingListsProject.js";
import RenderingLists from "./renderingLists/renderingLists.js";
import PureComponent from "./pureComponents/pureComponents.js";
import ElemsLib from "./elemsLib/elemsLib.js";
import AddingInteractivity from "./addingInteractivity/addingInteractivity";
import RespondingToEvents from "./addingInteractivity/respondingToEvents/respondingToEvents";
import Main from "./addingInteractivity/respondingToEvents/main";
import StateComponentsMemory from "./addingInteractivity/stateComponentsMemory/stateComponentsMemory";
import RenderAndCommit from "./addingInteractivity/renderAndCommit/renderAndCommit";
import StateAsSnapshot from "./addingInteractivity/stateAsSnapshot/stateAsSnapshot";
import QueueingSeriesStateUpdates from "./addingInteractivity/queueingSeriesStateUpdates/queueingSeriesStateUpdates";
import UpdatingObjectsInState from "./addingInteractivity/updatingObjectsInState/updatingObjectsInState";
import UpdatingArraysInState from "./addingInteractivity/updatingArraysInState/updatingArraysInState";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="react beta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UpdatingArraysInState />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
