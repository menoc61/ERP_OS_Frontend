import {
  CheckOutlined,
  FileDoneOutlined,
  FileOutlined,
  FileSyncOutlined,
  FundOutlined,
  HomeOutlined,
  InboxOutlined,
  MinusSquareOutlined,
  PlusSquareOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/sai-i-lama-logo.png";
// import styles from "./Sidenav.module.css";

const Test = ({ color }) => {
  const menu = [
    {
      label: (
        <NavLink to="/dashboard">
          <span>Dashboard</span>
        </NavLink>
      ),
      key: "dashboard",
      icon: <HomeOutlined />,
    },
    {
      label: "PRODUIT",
      key: "product",
      icon: <ShopOutlined />,
      children: [
        {
          label: (
            <NavLink to="/product-category">
              <span>Catégorie de produit</span>
            </NavLink>
          ),
          key: "productCategory",
          icon: <UnorderedListOutlined />,
        },
        {
          label: (
            <NavLink to="/product">
              <span>Produits</span>
            </NavLink>
          ),
          key: "products",
          icon: <UnorderedListOutlined />,
        },
      ],
    },
    {
      label: "APPROVISIONNEMENT",
      key: "purchaseSection",
      icon: <PlusSquareOutlined />,
      children: [
        {
          label: (
            <NavLink to="/supplier">
              <span>Fournisseurs</span>
            </NavLink>
          ),
          key: "suppliers",
          icon: <UserOutlined />,
        },
        {
          label: (
            <NavLink to="/purchase">
              <span>Nouvel Approvisionnement</span>
            </NavLink>
          ),
          key: "newPurchase",
          icon: <CheckOutlined />,
        },
        {
          label: (
            <NavLink to="/purchaselist">
              <span>Liste des Approvisionnements</span>
            </NavLink>
          ),
          key: "purchaseList",
          icon: <UnorderedListOutlined />,
        },
      ],
    },
    {
      label: "SPA",
      key: "saleSection",
      icon: <MinusSquareOutlined />,
      children: [
        {
          label: (
            <NavLink to="/customer">
              <span>Clientèle</span>
            </NavLink>
          ),
          key: "customers",
          icon: <UserOutlined />,
        },
        {
          label: (
            <NavLink to="/sale">
              <span>Nouvelle vente</span>
            </NavLink>
          ),
          key: "newSale",
          icon: <CheckOutlined />,
        },
        {
          label: (
            <NavLink to="/salelist">
              <span>Liste de vente</span>
            </NavLink>
          ),
          key: "saleList",
          icon: <UnorderedListOutlined />,
        },
      ],
    },
    {
      label: "COMPTES",
      key: "accountSection",
      icon: <InboxOutlined />,
      children: [
        {
          label: (
            <NavLink to="/account/">
              <span>Compte</span>
            </NavLink>
          ),
          key: "accountList",
          icon: <UnorderedListOutlined />,
        },
        {
          label: (
            <NavLink to="/transaction/create">
              <span>Nouvelle transaction</span>
            </NavLink>
          ),
          key: "newTransaction",
          icon: <CheckOutlined />,
        },
        {
          label: (
            <NavLink to="/transaction/">
              <span>Liste des transactions</span>
            </NavLink>
          ),
          key: "transactionList",
          icon: <UnorderedListOutlined />,
        },
      ],
    },
    {
      label: "RAPPORT",
      key: "reportSection",
      icon: <FundOutlined />,
      children: [
        {
          label: (
            <NavLink to="/account/trial-balance">
              <span>Balance de vérification</span>
            </NavLink>
          ),
          key: "trialBalance",
          icon: <FileDoneOutlined />,
        },
        {
          label: (
            <NavLink to="/account/balance-sheet">
              <span>Bilan</span>
            </NavLink>
          ),
          key: "balanceSheet",
          icon: <FileOutlined />,
        },
        {
          label: (
            <NavLink to="/account/income">
              <span>État des résultats</span>
            </NavLink>
          ),
          key: "incomeStatement",
          icon: <FileSyncOutlined />,
        },
      ],
    },

    {
      label: "HR",
      key: "hrSection",
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <NavLink to="/hr/staffs">
              <span>Personnel</span>
            </NavLink>
          ),
          key: "staffs",
          icon: <UsergroupAddOutlined />,
        },
        {
          label: (
            <NavLink to="/role">
              <span>Rôle et autorisations</span>
            </NavLink>
          ),
          key: "roleAndPermissions",
          icon: <UserSwitchOutlined />,
        },
        {
          label: (
            <NavLink to="/designation/">
              <span>Designation</span>
            </NavLink>
          ),
          key: "designation",
          icon: <UserSwitchOutlined />,
        },
      ],
    },
    {
      label: (
        <NavLink to="/pos">
          <span>BOUTIQUE</span>
        </NavLink>
      ),
      key: "pos",
      icon: <ShoppingCartOutlined />,
    },

    {
      label: "PARAMÈTRES",
      key: "settings",
      icon: <SettingOutlined />,
      children: [
        {
          label: (
            <NavLink to="/invoice-setting">
              <span>Paramètres de facturation</span>
            </NavLink>
          ),
          key: "invoiceSetting",
          icon: <SettingOutlined />,
        },
      ],
    },
  ];

  return (
    <div>
      <center>
        <img
          src={logo}
          alt="logo"
          style={{
            width: "50%",
            height: "50%",
            objectFit: "cover",
          }}
        />
      </center>
      <Menu
        theme="dark"
        mode="inline"
        items={menu}
        className="sidenav-menu"
        // style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
};

export default Test;
