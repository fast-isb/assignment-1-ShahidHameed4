import { Navbar, Link, Avatar, Dropdown } from "@nextui-org/react";
export default function  NavBar(){
  const collapseItems = [
    "Profile",
    "Dashboard",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
       
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Navbar.Link href="#/resident/HomePage">Home Page </Navbar.Link>
          <Navbar.Link href="#/resident/ManageProperty">Manage Property </Navbar.Link>
          <Navbar.Link href="#/resident/announcements">View Annoucement </Navbar.Link>
          <Navbar.Link href="#/resident/ComplaintStatus">Complaint Status </Navbar.Link>
          <Navbar.Link href="#/resident/CreateComplaints">Add Complaint</Navbar.Link>
          <Navbar.Link href="#/resident/CancelComplaints">Cancel Complaint</Navbar.Link>
          <Navbar.Link href="#/resident/Profile">Profile</Navbar.Link>

        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" href='./profile' css={{ height: "$18" }}>
            profile
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="./profile"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
  
  );
}
