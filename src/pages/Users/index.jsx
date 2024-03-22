import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, CheckBox, Button, SelectBox, Input } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, SubMenu, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const tableData = [
  {
    rowuser: "Andrew Bojangles",
    status: "Active",
    phonenumber: "+79000010101",
    position: "Designer",
    department: "Pride 1",
    activity: "2 days ago",
  },
  {
    rowuser: "Andrew Bojangles",
    status: "Active",
    phonenumber: "+79000010101",
    position: "Designer",
    department: "Pride 1",
    activity: "2 days ago",
  },
  {
    rowuser: "Andrew Bojangles",
    status: "Active",
    phonenumber: "+79000010101",
    position: "Designer",
    department: "Pride 1",
    activity: "2 days ago",
  },
  {
    rowuser: "Andrew Bojangles",
    status: "Active",
    phonenumber: "+79000010101",
    position: "Designer",
    department: "Pride 1",
    activity: "2 days ago",
  },
  {
    rowuser: "Andrew Bojangles",
    status: "Active",
    phonenumber: "+79000010101",
    position: "Designer",
    department: "Pride 1",
    activity: "2 days ago",
  },
  {
    rowuser: "Andrew Bojangles",
    status: "Active",
    phonenumber: "+79000010101",
    position: "Designer",
    department: "Pride 1",
    activity: "2 days ago",
  },
];

export default function UsersPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowuser", {
        cell: (info) => (
          <div className="flex justify-center items-end gap-[22px]">
            <div className="h-[16px] w-[16px] mb-3.5 border-indigo-A700 border border-solid rounded" />
            <div className="flex items-center mt-[13px] gap-3 flex-1">
              <Img src="images/img_ellipse.png" alt="circleimage" className="h-[43px] w-[43px] rounded-[50%]" />
              <Text size="md" as="p" className="!text-blue_gray-800 tracking-[0.15px]">
                {info?.getValue?.()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex pb-2 px-2">
            <CheckBox
              name="user"
              label="User"
              id="user"
              className="flex mb-[9px] pr-[35px] gap-[22px] py-[13px] sm:pr-5 text-gray-600 tracking-[0.14px] text-left text-sm font-medium"
            />
          </div>
        ),
        meta: { width: "310px" },
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => (
          <Text as="p" className="tracking-[0.13px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text size="s" as="p" className="pt-3 pb-[30px] sm:pb-5 tracking-[0.14px]">
            Status
          </Text>
        ),
        meta: { width: "126px" },
      }),
      tableColumnHelper.accessor("phonenumber", {
        cell: (info) => (
          <Text as="p" className="tracking-[0.13px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text size="s" as="p" className="pt-3 pb-[30px] sm:pb-5 tracking-[0.14px]">
            Phone number
          </Text>
        ),
        meta: { width: "166px" },
      }),
      tableColumnHelper.accessor("position", {
        cell: (info) => (
          <Text as="p" className="tracking-[0.13px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text size="s" as="p" className="pt-3 pb-[30px] sm:pb-5 tracking-[0.14px]">
            Position
          </Text>
        ),
        meta: { width: "166px" },
      }),
      tableColumnHelper.accessor("department", {
        cell: (info) => (
          <Text as="p" className="tracking-[0.13px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text size="s" as="p" className="pt-[13px] pb-[29px] sm:pb-5 tracking-[0.14px]">
            Department
          </Text>
        ),
        meta: { width: "146px" },
      }),
      tableColumnHelper.accessor("activity", {
        cell: (info) => (
          <div className="flex justify-between gap-5">
            <Text as="p" className="mt-[23px] mb-2 tracking-[0.13px]">
              {info?.getValue?.()}
            </Text>
            <Img src="images/img_hover_settings.svg" alt="hoversettings" className="h-[16px] w-[16px] mb-2" />
          </div>
        ),
        header: (info) => (
          <Text size="s" as="p" className="pt-[13px] pb-[29px] sm:pb-5 tracking-[0.14px]">
            Activity
          </Text>
        ),
        meta: { width: "143px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Mohammad maruf's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col justify-center items-start w-full bg-white-A700">
        <Sidebar
          width="237px !important"
          className="flex flex-col h-screen pb-8 pr-8 gap-6 top-0 sm:pb-5 sm:pr-5 bg-blue_gray-50 !sticky overflow-auto"
        >
          <Img src="images/img_logo.png" alt="logo_one" className="self-stretch md:h-auto object-cover" />
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                gap: "12px",
                color: "#343434",
                fontWeight: 400,
                fontSize: "16px",
                borderRadius: "10px",
                paddingTop: "12px",
                paddingBottom: "12px",
                [`&:hover, &.ps-active`]: {
                  color: "#ffffff",
                  fontWeight: "700 !important",
                  backgroundColor: "#0832de !important",
                },
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "304px" } }}
            className="flex flex-col items-center w-full mb-[5px]"
          >
            <div className="flex flex-col self-stretch">
              <MenuItem icon={<Img src="images/img_house.svg" alt="house_one" className="h-[24px] w-[24px]" />}>
                General
              </MenuItem>
              <MenuItem icon={<Img src="images/img_users.svg" alt="users_one" className="h-[24px] w-[24px]" />}>
                Users
              </MenuItem>
              <SubMenu
                icon={<Img src="images/img_users_blue_gray_900.svg" alt="users_four" className="h-[24px] w-[24px]" />}
                suffix={<div className="h-[24px] w-[26%]" />}
                label="Users"
              >
                <div className="flex flex-col">
                  <MenuItem>Statistic</MenuItem>
                  <MenuItem>Innactive</MenuItem>
                  <MenuItem>Users</MenuItem>
                </div>
              </SubMenu>
              <MenuItem
                icon={<Img src="images/img_creditcard.svg" alt="creditcard_one" className="h-[24px] w-[24px]" />}
              >
                Billing
              </MenuItem>
            </div>
            <div className="flex justify-center">
              <MenuItem icon={<Img src="images/img_signout.svg" alt="signout_one" className="h-[24px] w-[24px]" />}>
                Sign out
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>
        <div className="mt-[25px] md:p-5 flex-1">
          <div className="flex flex-col items-center gap-[29px]">
            <div className="flex md:flex-row items-center w-[85%] md:w-full gap-60">
              <div className="flex flex-col items-start gap-2 p-[13px]">
                <Text size="xl" as="p" className="ml-[17px] md:ml-0 !text-blue_gray-900 tracking-[0.15px] text-center">
                  12
                </Text>
                <Text size="md" as="p" className="mb-3 ml-[25px] md:ml-0 !text-gray-400 tracking-[0.15px] text-center">
                  Peoples
                </Text>
              </div>
              <div className="w-px h-[120px] bg-gray-400" />
              <div className="flex flex-col items-start gap-2 p-3.5">
                <Text size="xl" as="p" className="ml-[33px] md:ml-0 !text-blue_gray-900 tracking-[0.15px] text-center">
                  5
                </Text>
                <Text size="md" as="p" className="mb-[11px] ml-2 md:ml-0 !text-gray-400 tracking-[0.15px] text-center">
                  Departments
                </Text>
              </div>
              <div className="w-px h-[120px] bg-gray-400" />
              <div className="flex flex-col items-start gap-1.5 p-[13px]">
                <Text size="xl" as="p" className="ml-[33px] md:ml-0 !text-blue_gray-900 tracking-[0.15px] text-center">
                  0
                </Text>
                <Text
                  size="md"
                  as="p"
                  className="mb-[13px] ml-[27px] md:ml-0 !text-gray-400 tracking-[0.15px] text-center"
                >
                  Guests
                </Text>
              </div>
            </div>
            <div className="flex flex-col w-[94%] md:w-full gap-6">
              <div className="flex md:flex-col justify-between gap-5">
                <Input
                  name="search"
                  placeholder={`Search`}
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e)}
                  prefix={<Img src="images/img_magnifyingglass.svg" alt="MagnifyingGlass" className="cursor-pointer" />}
                  suffix={
                    searchBarValue?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={16} fillColor="#c4c4c4ff" />
                    ) : null
                  }
                  className="flex items-center justify-center h-[40px] pl-5 pr-[35px] gap-2.5 sm:pr-5 text-gray-400 tracking-[0.10px] text-[15px] border-gray-400 border border-solid flex-1 rounded-lg"
                />
                <div className="flex justify-center gap-2.5">
                  <Button
                    leftIcon={<Img src="images/img_userplus.svg" alt="UserPlus" />}
                    className="flex items-center justify-center h-[40px] gap-2.5 px-[35px] sm:px-5 text-white-A700 tracking-[0.15px] text-center text-[15px] font-medium bg-indigo-500 min-w-[187px] rounded-lg"
                  >
                    Invitve
                  </Button>
                  <Button className="flex items-center justify-center h-[40px] w-[40px]">
                    <Img src="images/defaultNoData.png" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-start gap-5">
                <div className="flex justify-center w-[29%] gap-6">
                  <SelectBox
                    indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                    name="dropdownlist"
                    placeholder={`All`}
                    options={dropDownOptions}
                    className="flex w-[31%] pl-3 pr-[35px] gap-px py-2 sm:pr-5 text-blue_gray-900 tracking-[0.10px] text-[15px] bg-gray-100 rounded-lg"
                  />
                  <SelectBox
                    indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                    name="dropdownlist"
                    placeholder={`All Departments`}
                    options={dropDownOptions}
                    className="flex pl-3 pr-[35px] gap-px py-2 sm:pr-5 text-blue_gray-900 tracking-[0.10px] text-[15px] bg-gray-100 flex-1 rounded-lg"
                  />
                </div>
                <Button className="flex items-center justify-center h-[40px] w-[40px]">
                  <Img src="images/img_vector.svg" />
                </Button>
              </div>
            </div>
            <div className="self-stretch h-[478px] relative">
              <Text size="s" as="p" className="right-[5%] top-[5%] m-auto !text-gray-600_01 tracking-[0.14px] absolute">
                Активность
              </Text>
              <div className="w-full h-full pt-3 left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute">
                <div>
                  <ReactTable
                    size="xs"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "md:flex-col" }}
                    rowDataProps={{ className: "md:flex-col" }}
                    className="w-[1057px]"
                    columns={tableColumns}
                    data={tableData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
