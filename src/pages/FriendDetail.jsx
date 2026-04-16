import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Phone,
  MessageSquare,
  Video,
  Bell,
  Archive,
  Trash2,
  Clock,
  History,
} from "lucide-react";

import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

function FriendDetail() {
  return (
    <div className="max-w-285 mx-auto py-10">
      <main className="grid grid-cols-[1fr_2fr] gap-6">
        <LeftSide />
        <RightSide />
      </main>
    </div>
  );
}
export default FriendDetail;
