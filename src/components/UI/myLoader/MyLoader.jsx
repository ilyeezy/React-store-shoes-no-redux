import ContentLoader from "react-content-loader";
import cs from "./MyLoader.module.scss";
const MyLoader = ({ ...props }) => (
  <ContentLoader
    speed={2}
    width={150}
    height={260}
    viewBox="0 0 150 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
    <rect x="0" y="105" rx="10" ry="10" width="150" height="36" />
    <rect x="0" y="155" rx="10" ry="10" width="150" height="32" />
  </ContentLoader>
);

export default MyLoader;
