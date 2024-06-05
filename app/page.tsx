import ImageWrapper from "@components/ImageWrapper";
import Button from "@components/Button";
import StatsCard from "@components/Card/StatsCard";
import { ClockIcon, ApartmentIcon, PcIcon } from "@assets/icons";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";

const statsData = [
  {
    value: "10+",
    description: "Languages available in integrated IDE",
    icon: <PcIcon />,
  },
  {
    value: 75,
    description: "Companies and Institutions using Examify",
    icon: <ApartmentIcon />,
  },
  {
    value: "1",
    description: "Hour to finish test and get results immediately",
    icon: <ClockIcon />,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col p-4 gap-8 sm:gap-16 p-4 sm:p-8">
        <div className="flex flex-row justify-center sm:gap-16">
          <div className="flex flex-col justify-center gap-6 p-2  max-w-xl">
            <Button
              btnText="Get Started"
              variant="outline"
              btnStyle="rounded-full text-sm mr-40 sm:mr-80"
            />
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Test your coding knowledge level and get recognized in different
              MNCs with <span className="text-brand-primary">Examify</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Your one-stop solution for setting up online exams and quizzes.
            </p>
            <div className="flex flex-row gap-4">
              <Button btnText="Learn more" variant="outline" />
              <Button btnText="Take demo" variant="primary" />
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-center rounded-full bg-brand-accent  max-w-xl">
            <ImageWrapper
              src="/assets/images/landing_image.png"
              alt="Logo"
              fallbackSrc="https://via.placeholder.com/500"
              className="rounded-full h-[500px]"
              width={800}
              height={800}
            />
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-row justify-center gap-2 sm:gap-8">
          {statsData.map((data, index) => (
            <StatsCard
              key={index}
              value={data.value}
              description={data.description}
              icon={data.icon}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center gap-16">
          <div className="max-w-xl flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-brand-primary">About</h2>
            <p className="text-base text-gray-500 mt-4">
              Our SaaS platform revolutionizes online testing for companies and
              educational institutions, offering a seamless and efficient way to
              conduct exams. With features like secure sign-up, user-friendly
              dashboards, comprehensive test management, and detailed result
              tracking, our solution simplifies the testing process from start
              to finish. Administrators can easily manage users, questions, and
              tests, while students benefit from clear instructions, intuitive
              test interfaces, and instant result feedback. Designed with
              scalability and ease of use in mind, our platform ensures a smooth
              and effective online testing experience for all users.
            </p>
          </div>
          <div className="max-w-xl hidden sm:block">
            <ImageWrapper
              src="/assets/images/about.jpg"
              alt="Logo"
              fallbackSrc="https://via.placeholder.com/500"
              className="rounded-lg h-[400px]"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
