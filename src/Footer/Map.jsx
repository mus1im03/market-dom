import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./Footer.module.css";

const YandexMap = () => {
  return (
    <div className={styles.map_block}>
      <YMaps>
        <Map
          defaultState={{
            center: [43.31426, 44.965998],
            zoom: 10,
          }}
        >
          <Placemark geometry={[43.31426, 44.965998]} />
        </Map>
      </YMaps>
      ;
    </div>
  );
};

export default YandexMap;
