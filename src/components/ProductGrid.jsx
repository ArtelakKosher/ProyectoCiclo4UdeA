import "../assets/styles/product-grid.css";
import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import productData from "./productData";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
}));

const ProductGrid = () => {
  return (
    <div className="section">
      <Box m={10}>
        <Box
          m={0}
          pt={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            component="strong"
            mb={2}
            variant="h2"
            align="center"
            style={{
              color: "#12284C",
              paddingTop: "20px",
              fontFamily: "Nunito Sans",
            }}
          >
            Productos
          </Typography>
        </Box>
        <Grid container spacing={6}>
        {productData.map((productData) => (
          <Grid item key={productData.id} xl={3} lg={4} md={6} sm={6}>
            <Item>
                <ProductCard
                  key={productData.id}
                  title={productData.title}
                  subtitle={productData.subtitle}
                  image={productData.image}
                  category={productData.category}
                  descriptionEs={productData.descriptionEs}
                  descriptionEn={productData.descriptionEn}
                  c
                  ingredientsEn={productData.ingredientsEn}
                  ingredientsEs={productData.ingredientsEs}
                  price={productData.price}
                  rating={productData.rating}
                  timeLeft={productData.timeLeft}
                  totalSales={productData.totalSales}
                />
              
            </Item>
          </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductGrid;
