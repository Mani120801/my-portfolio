import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Crypto-Application",
    image: ImageOne,
    demo:"https://mani-crypto-app-e7ccb4.netlify.app/",
    github:"https://github.com/Mani120801/crypto-app"
  },
  {
    id: 3,
    name: "File Sharing Application",
    image: ImageTwo,
    demo:"https://file-sharing-app-504ad4.netlify.app/",
    github:"https://github.com/Mani120801/file-sharing-app-client"
  },
  {
    id: 2,
    name: "Travelweb-application",
    image: ImageThree,
    demo:"https://mani-travelwebapp-9ea17b.netlify.app/",
    github:"https://github.com/Mani120801/travelweb-application"
  },
  {
    id: 2,
    name: "Todo App",
    image: ImageFour,
    demo:"https://mani-todolist-c16c57.netlify.app/",
    github:"https://github.com/Mani120801/ToDolist-app"
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <br></br>
                    <br></br><br></br>
                  <a href={item.demo} className="make">Visit</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a href={item.github} className="make">Code</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
