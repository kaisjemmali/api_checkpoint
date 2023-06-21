import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const UserList = ({ userInfo }) => {
  return (
    <div>
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          width: "20rem",
          marginBottom: "30px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {userInfo.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              UserName : {userInfo.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email : {userInfo.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Adress : {userInfo.address.street} {userInfo.address.suite}{" "}
              {userInfo.address.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Zip Code : {userInfo.address.zipcode}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone Number : {userInfo.phone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Website : {userInfo.website}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Company Name : {userInfo.company.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Catch Phrase : {userInfo.company.catchPhrase}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              BS : {userInfo.company.bs}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default UserList;
