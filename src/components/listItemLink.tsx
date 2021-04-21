import React from "react";
import { Link, LinkProps } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
interface PropsListItem {
  text: string;
  icon: JSX.Element;
  link: string;
}
const ListItemLink: React.FunctionComponent<PropsListItem> = ({
  icon,
  link,
  text,
}) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<LinkProps, "to">>((itemProps, ref) => (
        <Link to={link} ref={ref} {...itemProps} />
      )),
    [link]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} style={{ color: "#FFFFFF" }} />
      </ListItem>
    </li>
  );
};
export default ListItemLink;
