import { useState } from "react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from "recharts";

const ALL_MONTHLY = [
  { m: "Jun '24", r: 87400 },  { m: "Jul '24", r: 91200 },
  { m: "Aug '24", r: 96800 },  { m: "Sep '24", r: 103500 },
  { m: "Oct '24", r: 98200 },  { m: "Nov '24", r: 108700 },
  { m: "Dec '24", r: 115400 }, { m: "Jan '25", r: 112100 },
  { m: "Feb '25", r: 118600 }, { m: "Mar '25", r: 124300 },
  { m: "Apr '25", r: 121800 }, { m: "May '25", r: 128900 },
];

const TIER_12 = [
  { tier: "Free", rev: 52000 },
  { tier: "Pro", rev: 418000 },
  { tier: "Enterprise", rev: 730000 },
];
const TIER_6 = [
  { tier: "Free", rev: 28000 },
  { tier: "Pro", rev: 221000 },
  { tier: "Enterprise", rev: 381000 },
];

const TIER_COLORS = ["#a8c4e8", "#4a80c4", "#0f2d5c"];
const fmt = (v) =>
  "$" + (v >= 1000000 ? (v / 1000000).toFixed(1) + "M" : v >= 1000 ? Math.round(v / 1000) + "K" : v);
const fmtFull = (v) => "$" + v.toLocaleString();

const styles = {
  dash: {
    fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
    background: "#f0f2f7",
    minHeight: "100vh",
    padding: "28px 24px",
  },
  topbar: {
    display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24,
  },
  logoWrap: { display: "flex", alignItems: "center", gap: 10 },
  logoMark: {
    width: 34, height: 34, background: "#0f2d5c", borderRadius: 9,
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  logoTitle: { fontSize: 16, fontWeight: 700, color: "#0f2d5c", letterSpacing: "-0.3px" },
  logoSub: { fontSize: 12, color: "#8492a6", marginTop: 1 },
  badge: {
    background: "#e8f0fe", color: "#1a56db", fontSize: 11, fontWeight: 600,
    padding: "5px 12px", borderRadius: 20, letterSpacing: "0.4px",
  },
  kpiGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 22 },
  kpiCard: {
    background: "#fff", borderRadius: 14, padding: "20px 22px",
    boxShadow: "0 1px 3px rgba(15,45,92,.07), 0 4px 12px rgba(15,45,92,.06)",
  },
  kpiLabel: {
    fontSize: 11, fontWeight: 600, color: "#8492a6",
    textTransform: "uppercase", letterSpacing: "0.7px", marginBottom: 10,
  },
  kpiValue: { fontSize: 28, fontWeight: 700, color: "#0f2d5c", letterSpacing: "-0.6px", lineHeight: 1 },
  kpiFooter: { display: "flex", alignItems: "center", gap: 6, marginTop: 10 },
  arrowUp: {
    width: 18, height: 18, background: "#dcfce7", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  kpiChange: { fontSize: 12, fontWeight: 600, color: "#16a34a" },
  kpiPeriod: { fontSize: 12, color: "#b0bac9" },
  filterBar: {
    display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16,
  },
  sectionTitle: { fontSize: 14, fontWeight: 700, color: "#0f2d5c" },
  sectionSub: { fontSize: 12, color: "#8492a6", marginTop: 2 },
  filterSel: {
    appearance: "none", background: "#f5f7ff",
    border: "1.5px solid #d1d9f0", borderRadius: 8,
    padding: "7px 32px 7px 12px", fontSize: 13, fontWeight: 500, color: "#0f2d5c",
    cursor: "pointer", fontFamily: "inherit",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%230f2d5c'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center",
  },
  chartsRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 },
  chartCard: {
    background: "#fff", borderRadius: 14, padding: "22px 20px 18px",
    boxShadow: "0 1px 3px rgba(15,45,92,.07), 0 4px 12px rgba(15,45,92,.06)",
  },
  tierLegend: { display: "flex", gap: 14, marginBottom: 14, flexWrap: "wrap" },
  legItem: { display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#5a6a7e", fontWeight: 500 },
  legDot: { width: 10, height: 10, borderRadius: 3 },
};

function LineTip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#0f2d5c", borderRadius: 8, padding: "8px 14px", boxShadow: "0 4px 12px rgba(0,0,0,.18)" }}>
      <div style={{ fontSize: 11, color: "#a0b4cc", marginBottom: 3 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{fmtFull(payload[0].value)}</div>
    </div>
  );
}

function BarTip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#0f2d5c", borderRadius: 8, padding: "8px 14px", boxShadow: "0 4px 12px rgba(0,0,0,.18)" }}>
      <div style={{ fontSize: 11, color: "#a0b4cc", marginBottom: 3 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{fmtFull(payload[0].value)}</div>
    </div>
  );
}

function KPI({ label, value, change, period }) {
  return (
    <div style={styles.kpiCard}>
      <div style={styles.kpiLabel}>{label}</div>
      <div style={styles.kpiValue}>{value}</div>
      <div style={styles.kpiFooter}>
        <div style={styles.arrowUp}>
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path d="M4.5 1.5v6M1.5 4l3-3 3 3" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span style={styles.kpiChange}>{change}</span>
        <span style={styles.kpiPeriod}>{period}</span>
      </div>
    </div>
  );
}

export default function App() {
  const [range, setRange] = useState("12");
  const monthly = range === "12" ? ALL_MONTHLY : ALL_MONTHLY.slice(6);
  const tiers = range === "12" ? TIER_12 : TIER_6;
  const periodLabel = range === "12" ? "Jun 2024 – May 2025" : "Dec 2024 – May 2025";
  const tierLabel = range === "12" ? "Full year breakdown" : "Past 6 months";

  return (
    <div style={styles.dash}>
      {/* Header */}
      <div style={styles.topbar}>
        <div style={styles.logoWrap}>
          <div style={styles.logoMark}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="8" width="3" height="6" rx="1" fill="white" opacity="0.6" />
              <rect x="6.5" y="4" width="3" height="10" rx="1" fill="white" opacity="0.85" />
              <rect x="11" y="1" width="3" height="13" rx="1" fill="white" />
            </svg>
          </div>
          <div>
            <div style={styles.logoTitle}>K21 Sales Dashboard</div>
            <div style={styles.logoSub}>SaaS Performance Overview</div>
          </div>
        </div>
        <div style={styles.badge}>Q2 2025</div>
      </div>

      {/* KPI Cards */}
      <div style={styles.kpiGrid}>
        <KPI label="Total Revenue" value="$1.2M" change="+12%" period="vs last quarter" />
        <KPI label="Active Customers" value="847" change="+12%" period="vs last quarter" />
        <KPI label="Churn Rate" value="3.2%" change="+12%" period="vs last quarter" />
      </div>

      {/* Filter Row */}
      <div style={styles.filterBar}>
        <div>
          <div style={styles.sectionTitle}>Performance Charts</div>
          <div style={styles.sectionSub}>Filtered by selected period</div>
        </div>
        <select
          style={styles.filterSel}
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option value="12">Last 12 months</option>
          <option value="6">Last 6 months</option>
        </select>
      </div>

      {/* Charts */}
      <div style={styles.chartsRow}>
        {/* Line Chart */}
        <div style={styles.chartCard}>
          <div style={styles.sectionTitle}>Monthly Revenue</div>
          <div style={styles.sectionSub}>{periodLabel}</div>
          <div style={{ height: 220, marginTop: 18 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthly} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e8edf5" vertical={false} />
                <XAxis
                  dataKey="m" tick={{ fontSize: 10, fill: "#8492a6" }}
                  tickLine={false} axisLine={false} interval="preserveStartEnd"
                />
                <YAxis
                  tickFormatter={fmt} tick={{ fontSize: 10, fill: "#8492a6" }}
                  tickLine={false} axisLine={false} width={44}
                />
                <Tooltip content={<LineTip />} />
                <Line
                  type="monotone" dataKey="r" stroke="#1a56db" strokeWidth={2.5}
                  dot={{ r: 3, fill: "#1a56db", strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: "#1a56db", stroke: "#fff", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div style={styles.chartCard}>
          <div style={styles.sectionTitle}>Revenue by Tier</div>
          <div style={styles.sectionSub}>{tierLabel}</div>
          <div style={styles.tierLegend}>
            {["Free", "Pro", "Enterprise"].map((label, i) => (
              <span key={i} style={styles.legItem}>
                <span style={{ ...styles.legDot, background: TIER_COLORS[i] }} />
                {label}
              </span>
            ))}
          </div>
          <div style={{ height: 185 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tiers} margin={{ top: 4, right: 8, left: 0, bottom: 0 }} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e8edf5" vertical={false} />
                <XAxis
                  dataKey="tier" tick={{ fontSize: 11, fill: "#8492a6" }}
                  tickLine={false} axisLine={false}
                />
                <YAxis
                  tickFormatter={fmt} tick={{ fontSize: 10, fill: "#8492a6" }}
                  tickLine={false} axisLine={false} width={44}
                />
                <Tooltip content={<BarTip />} />
                <Bar dataKey="rev" radius={[6, 6, 0, 0]}>
                  {tiers.map((_, i) => (
                    <Cell key={i} fill={TIER_COLORS[i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
