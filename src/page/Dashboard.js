import React, {useContext} from "react";
import DashboardLayout from "../component/DashboardLayout";
import "../style/Dashboard.css";
import cardImgOne from "../assest/one-mont-img.png";
import cardImgTwo from "../assest/overdraft-icon.png";
import cardImgThree from "../assest/open-img.png";
import cardImgFour from "../assest/t-t-img.png";
import cardImgFive from "../assest/infrastructure-img.png";
import cardImgSix from "../assest/personal-img.png";
import cardImgSeven from "../assest/pawn-img.png";
import cardImgEight from "../assest/fx-img.png";
import Card from "../fragment/Card";
import ControlContext from "../store/ContextControl";

const list = [
  {
    title: "One Month Loan",
    text: "Access funds for personal upkeep for 30 days only",
    img: cardImgOne,
  },
  {
    title: "Working Capital Overdraft",
    text: "Access funds for personal upkeep for 30 days only",
    img: cardImgTwo,
  },
  {
    title: "Operation Overdraft",
    text: "Financing for your business operations",
    img: cardImgThree,
  },
  {
    title: "T and T Spread Loan",
    text: " Purchase phones, generators and vehicles on a reasonable payment plan from T and T Deals Market",
    img: cardImgFour,
  },
  {
    title: "Infrastrusture Loan",
    text: "Facility for your business to purchase vehicles, assets, and building upgrades.",
    img: cardImgFive,
  },
  {
    title: "Personal Loan",
    text: "Instant funds for your personal expenses.",
    img: cardImgSix,
  },
  {
    title: "Pawn Loan",
    text: "Get cash value on temporary sale of your items within 72hours.",
    img: cardImgSeven,
  },
  {
    title: "FX line",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    img: cardImgEight,
  },
];

const Dashboard = () => {
    const ctrCtx = useContext(ControlContext)
  return (
    <div style={{ width: "100%", height: "100" }}>
      <DashboardLayout>
        <div className="content-box"  onClick={() => ctrCtx.sideBarToggleFunc("close")}>
          <h2 className="title">Loans</h2>
          <p className="text">
            <span>Monday,</span> 21st February, 2021
          </p>

          <div className="card-wrapper">
              {
                  list.map(({img, title, text}, index) => {
                      return (
                          <Card
                          key={index}
                          title={title}
                          text={text}
                          img={img}
                          />
                      )
                  })
              }
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
