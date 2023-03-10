import styles from "@/components/ProgressIndicator/ProgressIndicator.module.css";

interface ProgressIndicatorProps {
  progress: number;
}

export function ProgressIndicator({ progress }: ProgressIndicatorProps) {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressPercentage}>{progress || "-"}%</div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress || "0"}%` }}
        />
      </div>
    </div>
  );
}
