import React, { memo } from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import { useCancelToken } from "../utils";
import {
  AppAsideToggler,
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";
import {
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem
} from "reactstrap";

import logo from "../../assets/img/logo-text.png";
// import sygnet from "../../assets/img/sygnet.svg";
import avatar from "../../assets/img/employees/8.jpg";
import { useAuth } from "../services";

const DefaultHeader = memo(({ children, ...attributes }) => {
  const { signOut } = useAuth();
  const cancelToken = useCancelToken();

  return (
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppNavbarBrand
        full={{ src: logo, width: 89, height: 25, alt: "shiseido-mdm" }}
        // minimized={{ src: sygnet, width: 30, height: 30, alt: "CoreUI Logo" }}
      />
      <AppSidebarToggler className="d-md-down-none" display="lg" />
      <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
          <Link to="/users" className="nav-link">
            Users
          </Link>
        </NavItem>
        <NavItem className="px-3">
          <Link to="/qr-code" className="nav-link">
            QR Code
          </Link>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        {/*<NavItem className="d-md-down-none">*/}
        {/*  <NavLink to="#" className="nav-link">*/}
        {/*    <i className="icon-bell"></i>*/}
        {/*    <Badge pill color="danger">*/}
        {/*      5*/}
        {/*    </Badge>*/}
        {/*  </NavLink>*/}
        {/*</NavItem>*/}
        {/*<NavItem className="d-md-down-none">*/}
        {/*  <NavLink to="#" className="nav-link">*/}
        {/*    <i className="icon-list"></i>*/}
        {/*  </NavLink>*/}
        {/*</NavItem>*/}
        {/*<NavItem className="d-md-down-none">*/}
        {/*  <NavLink to="#" className="nav-link">*/}
        {/*    <i className="icon-location-pin"></i>*/}
        {/*  </NavLink>*/}
        {/*</NavItem>*/}
        <UncontrolledDropdown nav direction="down">
          <DropdownToggle nav>
            <img
              src={avatar}
              className="img-avatar"
              alt="admin@bootstrapmaster.com"
            />
          </DropdownToggle>
          <DropdownMenu className="profile-info" right>
            <DropdownItem
              header
              tag="div"
              className="text-center role"
            >
              <strong>Admin</strong>
            </DropdownItem>
            {/*<DropdownItem>*/}
            {/*  <i className="fa fa-bell-o"></i> Alert*/}
            {/*  <Badge color="info">42</Badge>*/}
            {/*</DropdownItem>*/}
            {/*<DropdownItem>*/}
            {/*  <i className="fa fa-envelope-o"></i> Messages*/}
            {/*  <Badge color="success">42</Badge>*/}
            {/*</DropdownItem>*/}
            {/*<DropdownItem>*/}
            {/*  <i className="fa fa-tasks"></i> Tasks*/}
            {/*  <Badge color="danger">42</Badge>*/}
            {/*</DropdownItem>*/}
            {/*<DropdownItem header tag="div" className="text-center">*/}
            {/*  <strong>Settings</strong>*/}
            {/*</DropdownItem>*/}
            <DropdownItem>
              <i className="fa fa-user" />
              Profile
            </DropdownItem>
            {/*<DropdownItem>*/}
            {/*  <i className="fa fa-wrench"></i> Settings*/}
            {/*</DropdownItem>*/}
            <DropdownItem onClick={signOut}>
              <i className="fa fa-lock" />
              Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      {/*<AppAsideToggler className="d-md-down-none" />*/}
      {/*<AppAsideToggler className="d-lg-none" mobile />*/}
    </React.Fragment>
  );
});

DefaultHeader.propTypes = {
  children: PropTypes.node
};
DefaultHeader.defaultProps = {};

export default DefaultHeader;
