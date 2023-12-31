import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import { useStyles } from "./styles";
import Image, { StaticImageData } from "next/image";

import Text from "components/Typography";

interface Props extends TypographyProps {
  image: StaticImageData;
  name: string;
  description: string;
}

const Block = (props: Props) => {
  const { classes, cx } = useStyles();
  const { name, description, image } = props;

  return (
    <Grid container item sm={6} xs={12} md={2.5} className={cx(classes.container)}>
      <Grid className={cx(classes.img)}>
        <Image src={image} alt="image" layout="fixed" />
        <Text className={cx(classes.styling)} variant="h3" name={name} />
        <Text variant="body2" name={description} />
      </Grid>
    </Grid>
  );
};

export default Block;
