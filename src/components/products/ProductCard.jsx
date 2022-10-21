import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/joy/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import CurrencyFormat from "react-currency-format";

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

const StyledFavoriteIcon = styled(FavoriteIcon, {
  name: "StyledFavoriteIcon",
  slot: "Wrapper",
})({
  color: "#12284c",
  "&:hover": { color: "#cc9e6a" },
});

const StyledShareIcon = styled(ShareIcon, {
  name: "StyledShareIcon",
  slot: "Wrapper",
})({
  color: "#12284c",
  "&:hover": { color: "#cc9e6a" },
});

const StyledShoppingBagIcon = styled(ShoppingBagIcon, {
  name: "StyledShoppingBagIcon",
  slot: "Wrapper",
})({
  color: "#12284c",
  "&:hover": { color: "#cc9e6a" },
});

const ProductCard = ({
  id,
  title,
  subtitle,
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
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton
              aria-label="Compartir"
              className={classes.rightAlignItem}
            >
              <StyledShareIcon />
            </IconButton>
          }
          title={title}
          subheader={subtitle}
          className={classes.blue}
        />
        <CardMedia component="img" height="200" image={image} alt={title} />
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
            Descripción: {descriptionEs}
            <br />
            Description: {descriptionEn}
            <br />
            <br />
            Ingredientes: {ingredientsEs}
            <br />
            Ingredients: {ingredientsEn}
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
          <IconButton
            aria-label="Agregar a favoritos"
            className={classes.rightAlignItem}
          >
            <StyledFavoriteIcon />
          </IconButton>
          <IconButton
            aria-label="Añadir al carrito"
            className={classes.rightAlignItem}
          >
            <StyledShoppingBagIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
