import { Scheduler } from "./lib";
import { EVENTS } from "./events";
import { useRef } from "react";
import { SchedulerRef } from "./lib/types";

function App() {
  const calendarRef = useRef(null);

  // const fetchRemote = async (query: RemoteQuery): Promise<ProcessedEvent[]> => {
  //   console.log({ query });
  //   /**Simulate fetchin remote data */
  //   return new Promise((res) => {
  //     setTimeout(() => {
  //       res(generateRandomEvents(200));
  //     }, 3000);
  //   });
  // };

  const d = new Date();
  console.log(d.getHours());
  const startHour = Math.max(8, d.getHours());
  console.log(startHour);
  return (
    <div style={{ width: 800, height: 700 }}>
      <Scheduler
        view="week"
        week={{
          weekDays: [0, 1, 2, 3, 4, 5, 6],
          weekStartOn: 1,
          startHour: startHour,
          endHour: 17,
          step: 30,
          navigation: true,
          disableGoToDay: false,
        }}
        ref={calendarRef}
        events={EVENTS}
        // events={generateRandomEvents(200)}
      />
    </div>
  );
}

export default App;
