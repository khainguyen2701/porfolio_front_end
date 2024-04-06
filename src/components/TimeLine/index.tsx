import { StarIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timeLines = [
  {
    position: "Student",
    exp: "I learned basic Textrogramming knowledge including the following languages: HTML, CSS, JS, JAVA, C++, C#, MYSQL...",
    companyName: "Information technology department - Thu Duc Collage",
    year: "2018-2021"
  },
  {
    position: "Software Engineer (Front End Developer)",
    exp: "Central Retail project. I have learned many things here, such as the software development process, knowledge of the e-commerce field, and how to report daily work and hand over projects to customers.",
    companyName: "Kyanon Digital",
    year: "04/2022 - 02/2023"
  },
  {
    position: "Software Engineer (Front End Developer)",
    exp: "Chan brother travel project is a project in the field of tourism, this is a project of the Singapore government to develop a website to help customers easily book tours on the web. Here I learned about new technology, NextJS, used to develop Google's UI and SEO support. In addition, I also learned about many operating procedures of a tour.",
    companyName: "Kyanon Digital",
    year: "05/2022 - 09/2023"
  },
  {
    position: "Mentor (Websites) Job Freelancer",
    exp: "I was assigned a position to teach students who wanted to become web programmers, here I learned how to present and solve students' problems, as well as further develop my skills.",
    companyName: "Mindx Technology",
    year: "05/2023 - 11/2023"
  },
  {
    position: "Software Engineer (Front End Developer)",
    exp: "Amaze - CP Group This is a big project for the company and myself, because we have to develop an e-commerce system for customers, sellers, admins, kols to use, us and customers. The store took development ideas from shopee to develop a complete website application and will be lunched into production on April 16, 2024. I learned quite a lot from this project, from technical and e-commerce fields",
    companyName: "Kyanon Digital",
    year: "10/2023 - 04/2024"
  }
];

function TimeLine() {
  return (
    <VerticalTimeline>
      {timeLines.map((t) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(31, 50, 66)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(31, 50, 66)" }}
          date={t.year}
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff"
          }}
          icon={<StarIcon />}
        >
          <Text className="vertical-timeline-element-title">{t.position}</Text>
          <Text className="vertical-timeline-element-subtitle">
            {t.companyName}
          </Text>
          <Text>{t.exp}</Text>
        </VerticalTimelineElement>
      ))}

      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}

export default TimeLine;
