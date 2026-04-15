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

// ── Status config ──────────────────────────────────────────
const STATUS_STYLES = {
  overdue: "bg-red-500 text-white",
  "almost due": "bg-amber-400 text-white",
  "on-track": "bg-green-500 text-white",
};

const STATUS_LABELS = {
  overdue: "Overdue",
  "almost due": "Almost Due",
  "on-track": "On Track",
};

// ── Mock interactions (replace with real data later) ───────
const MOCK_INTERACTIONS = [
  {
    id: 1,
    type: "Text",
    note: "Asked for career advice",
    date: "Jan 28, 2026",
    icon: MessageSquare,
  },
  {
    id: 2,
    type: "Meetup",
    note: "Industry conference meetup",
    date: "Jan 28, 2026",
    icon: Phone,
  },
  {
    id: 3,
    type: "Video",
    note: "Asked for career advice",
    date: "Jan 28, 2026",
    icon: Video,
  },
  {
    id: 4,
    type: "Text",
    note: "Asked for career advice",
    date: "Jan 28, 2026",
    icon: MessageSquare,
  },
];

// ── Sub-components ─────────────────────────────────────────

function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <Card className="flex flex-col items-center justify-center p-5 text-center">
      <span className="text-3xl font-bold text-slate-800">{value}</span>
      <span className="text-sm text-slate-400 mt-1">{label}</span>
    </Card>
  );
}

function ActionButton({ icon: Icon, label }) {
  return (
    <button className="flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-colors">
      <Icon size={22} className="text-slate-600" />
      <span className="text-sm text-slate-600 font-medium">{label}</span>
    </button>
  );
}

function InteractionItem({ icon: Icon, type, note, date }) {
  return (
    <div className="flex items-center gap-3 py-3">
      <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
        <Icon size={15} className="text-slate-500" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-700">{type}</p>
        <p className="text-xs text-slate-400 truncate">{note}</p>
      </div>
      <span className="text-xs text-slate-400 shrink-0">{date}</span>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────

const FriendDetail = () => {
  const friend = useLoaderData();

  const {
    name,
    picture,
    status,
    tags = [],
    bio,
    days_since_contact,
    goal,
    next_due_date,
  } = friend;

  const statusClass = STATUS_STYLES[status] ?? STATUS_STYLES["on-track"];
  const statusLabel = STATUS_LABELS[status] ?? "On Track";

  const formattedDueDate = new Date(next_due_date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto flex gap-6 items-start">
        {/* ── LEFT COLUMN ───────────────────────────── */}
        <div className="flex flex-col gap-4 w-72 shrink-0">
          {/* Profile card */}
          <Card className="flex flex-col items-center text-center p-6 gap-2">
            <img
              src={picture}
              alt={name}
              className="w-20 h-20 rounded-full object-cover"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=e2e8f0&color=475569&size=128`;
              }}
            />
            <h2 className="text-lg font-bold text-slate-800 mt-1">{name}</h2>

            {/* Status badge */}
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${statusClass}`}
            >
              {statusLabel}
            </span>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-green-100 text-green-700 rounded-full px-3 py-0.5 uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bio & preferred contact */}
            {bio && (
              <p className="text-xs text-slate-500 italic mt-1">"{bio}"</p>
            )}
            <p className="text-xs text-slate-400">Preferred: email</p>
          </Card>

          {/* Actions card */}
          <Card className="divide-y divide-gray-100">
            <button className="flex items-center gap-2.5 w-full px-5 py-3.5 text-sm text-slate-600 hover:bg-gray-50 transition-colors rounded-t-2xl">
              <Bell size={16} />
              Snooze 2 Weeks
            </button>
            <button className="flex items-center gap-2.5 w-full px-5 py-3.5 text-sm text-slate-600 hover:bg-gray-50 transition-colors">
              <Archive size={16} />
              Archive
            </button>
            <button className="flex items-center gap-2.5 w-full px-5 py-3.5 text-sm text-red-500 hover:bg-red-50 transition-colors rounded-b-2xl">
              <Trash2 size={16} />
              Delete
            </button>
          </Card>
        </div>

        {/* ── RIGHT COLUMN ──────────────────────────── */}
        <div className="flex flex-col gap-4 flex-1 min-w-0">
          {/* Stat cards row */}
          <div className="grid grid-cols-3 gap-4">
            <StatCard label="Days Since Contact" value={days_since_contact} />
            <StatCard label="Goal (Days)" value={goal} />
            <StatCard label="Next Due" value={formattedDueDate} />
          </div>

          {/* Relationship goal */}
          <Card className="p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-semibold text-slate-700">
                Relationship Goal
              </h3>
              <button className="text-xs border border-gray-200 rounded-lg px-3 py-1 text-slate-500 hover:bg-gray-50 transition-colors">
                Edit
              </button>
            </div>
            <p className="text-sm text-slate-500">
              Connect every{" "}
              <span className="font-bold text-slate-700">{goal} days</span>
            </p>
          </Card>

          {/* Quick check-in */}
          <Card className="p-5">
            <h3 className="text-base font-semibold text-slate-700 mb-3">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <ActionButton icon={Phone} label="Call" />
              <ActionButton icon={MessageSquare} label="Text" />
              <ActionButton icon={Video} label="Video" />
            </div>
          </Card>

          {/* Recent interactions */}
          <Card className="p-5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-semibold text-slate-700">
                Recent Interactions
              </h3>
              <button className="flex items-center gap-1.5 text-xs border border-gray-200 rounded-lg px-3 py-1 text-slate-500 hover:bg-gray-50 transition-colors">
                <History size={13} />
                Full History
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {MOCK_INTERACTIONS.map((item) => (
                <InteractionItem key={item.id} {...item} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FriendDetail;
