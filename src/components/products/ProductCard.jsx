import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/joy/Typography";
import ShareIcon from "@mui/icons-material/Share";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import CurrencyFormat from "react-currency-format";
import { Flag } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    marginTop: 4,
  },
  leftAlignItem: {
    marginRight: "auto",
  },
  rightAlignItem: {
    marginLeft: "auto",
  },
  parentFlexLeft: {
    display: "flex",
    justifyContent: "flex-start",
  },
  parentFlexRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  parentFlexSplit: {
    display: "flex",
    justifyContent: "space-between",
  },
  blue: {
    color: "#12284c",
  },
}));

const StyledShareIcon = styled(ShareIcon, {
  name: "StyledShareIcon",
  slot: "Wrapper",
})({
  color: "#12284c",
  "&:hover": { color: "#cc9e6a" },
});

const StyledButton = styled(Button, {
  name: "StyledButton",
  slot: "Wrapper",
})({
  color: "#12284c",
  "&:hover": { color: "#cc9e6a" },
});

const ProductCard = ({
  id,
  titleEs,
  subtitleEs,
  image,
  category,
  descriptionEs,
  descriptionEn,
  ingredientsEs,
  ingredientsEn,
  price,
  rating,
  timeLeft,
  totalSales,
}) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(2);

  return (
    <Box
      key={id}
      m={0}
      pt={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Card sx={{ width: 280, height: 500 }}>
        <CardHeader
          action={
            <IconButton
              aria-label="Compartir"
              className={classes.rightAlignItem}
            >
              <StyledShareIcon />
            </IconButton>
          }
          title={titleEs}
          subheader={subtitleEs}
          className={classes.blue}
        />
        <CardMedia component="img" height="200" image={image} alt={titleEs} />
        <CardContent>
          <Typography
            variant="body2"
            className={classes.blue}
            component="span"
            style={{
              textAlign: "left",
              color: "#12284C",
              fontFamily: "Nunito Sans",
            }}
          >
            <Flag name="es" />: {descriptionEs}
            <br />
            <br />
            <Flag name="us" />: {descriptionEn}
            <br />
            <br />
            <Box display="flex" justifyContent="flex-end">
              <div>
                <Typography
                  level="body"
                  component="strong"
                  style={{
                    color: "#12284C",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  Precio:{" "}
                </Typography>
                <Typography
                  mb={2}
                  maxWidth={400}
                  style={{
                    color: "#12284C",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  <CurrencyFormat
                    value={price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </Typography>
              </div>
            </Box>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Rating
            name="read-only"
            value={rating}
            precision={0.1}
            readOnly
            className={classes.leftAlignItem}
          />
          <Link to={`/product/${id}`}>
            <StyledButton
              size="small"
              color="primary"
              className={classes.leftAlignItem}
            >
              Ver detalles
            </StyledButton>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
