import { useState } from "react";
import styles from "@/components/ProgressIndicator/ProgressIndicator.module.css";

type ProgressCounterShapeTypes = "bar" | "circle";

interface ProgressIndicatorProps {
  progress: number;
}

export function ProgressIndicator({ progress }: ProgressIndicatorProps) {
  const [progressCounterShape, setProgressCounterShape] =
    useState<ProgressCounterShapeTypes>("circle");

  const handleChangeIndicatorShape = () => {
    const nextShape = progressCounterShape === "circle" ? "bar" : "circle";
    setProgressCounterShape(nextShape);
  };

  return (
    <>
      <div className={styles.indicatorContainer}>
        <div
          className={styles.outsideShape}
          onClick={() => handleChangeIndicatorShape()}
        >
          <div
            className={styles.insideShape}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      </div>
      <div className={styles.metrics}>
        <div className={styles.downloadProgress}>100%</div>
        <div className={styles.downloadSpeed}>100 mb/s</div>
      </div>
    </>
  );
}
