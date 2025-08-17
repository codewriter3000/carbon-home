import SwipeSwitch from "../components/SwipeSwitch/SwipeSwitch";
import arrowRightIcon from "../assets/icons/arrowRight.svg";
import Notification from "../components/Notification/Notification";

const LockScreen = () => {
  const notifications = [
    {
      timestamp: "2:14 AM",
      app: "Messaging",
      message: "New message from Alex",
      type: "info" as const,
    },
    {
      timestamp: "2:10 AM",
      app: "Email",
      message: "New email from HR",
      type: "info" as const,
    },
    {
      timestamp: "2:05 AM",
      app: "Weather",
      message: "Rain expected in 30 minutes",
      type: "info" as const,
    },
  ];

  return (
    <div
      style="display: flex; flex-direction: column;
        align-items: center; justify-content: space-between;
        height: 80vh; width: 100vw;
        background-color: #161616;"
    >
      <h1 class="light" style="font-size: 6rem;">
        2:14AM
      </h1>

        <div class="notifications">
            {notifications.map((notification) => (
                <Notification
                    timestamp={notification.timestamp}
                    app={notification.app}
                    message={notification.message}
                    type={notification.type}
                />
            ))}
        </div>

      {/* Additional lock screen components can be added here */}
      <SwipeSwitch text="Swipe to Unlock" icon={arrowRightIcon} />
    </div>
  );
};

export default LockScreen;
