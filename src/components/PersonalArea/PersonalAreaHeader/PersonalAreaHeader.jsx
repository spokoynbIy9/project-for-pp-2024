import React from "react";
import styles from "../PersonalAreaHeader/PersonalAreaHeader.module.css";
import logo from "../../../assets/k-small.png";
import avatarka from "../../../assets/avatarka.png";
import strelka from "../../../assets/strelkadown.png";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import PersonalAreaMenu from "./PersonalAreaMenu/PersonalAreaMenu";
import { useState } from "react";
const PersonalAreaHeader = (props) => {
  const { selectedSection, setSelectedSection } = props;
  const navigate = useNavigate();
  //сделать смену белого цвета снизу

  const sections = ["Мой сайт", "CRM"];
  const [openMenu, setOpenMenu] = useState(false);
  const checkMenu = () => {
    if (!openMenu) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };
  const handleClickSwitchPages = (sectionName) => {
    if (sectionName === "Мой сайт") {
      setSelectedSection(sectionName);
      navigate(`/projects`);
    } else if (sectionName === "CRM") {
      setSelectedSection(sectionName);
      navigate(`/crm`);
    }
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["left-half"]}>
        <div className={styles.square}></div>
        <img src={logo} alt="" className={styles["logo"]} />

        <div className={styles["left-menu"]}>
          {sections.map((section) => (
            <div
              className={classNames(styles.sections, {
                [styles["choosen-section"]]: section === selectedSection,
              })}
              key={section}
              onClick={() => {
                handleClickSwitchPages(section);
              }}
            >
              {section}
            </div>
          ))}
        </div>
      </div>
      <div className={styles["right-half"]} onClick={checkMenu}>
        <img src={avatarka} alt="" />
        <div className={styles["strelka"]}>
          <img src={strelka} alt="" />
        </div>
      </div>
      <PersonalAreaMenu
        openMenu={openMenu}
        setSelectedSection={() => setSelectedSection("")}
      ></PersonalAreaMenu>
    </div>
  );
};

export default PersonalAreaHeader;
