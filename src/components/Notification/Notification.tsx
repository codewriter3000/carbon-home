import "./_style.css";

const Notification = ({
  timestamp,
  app,
  message,
  type,
}: {
  timestamp: string;
  app: string;
  message: string;
  type: "info" | "success" | "error";
}) => {
  return (
    <div class={`notification-${type}`}>
        <h3 class="app">{app}</h3>
        <div style="display: flex;
    flex-direction: row;">
            <span class="timestamp">{timestamp}</span>&nbsp;
            <span class="message">{message}</span>
        </div>
    </div>
  );
};

export default Notification;
