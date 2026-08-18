import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  FileSearch,
  Filter,
  FolderKanban,
  LayoutDashboard,
  Mail,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  Sparkles,
  Target,
  Upload,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Candidates", icon: Users, count: "24" },
  { label: "Vacancies", icon: BriefcaseBusiness, count: "8" },
  { label: "Clients", icon: Building2, count: "17" },
  { label: "Placements", icon: Target },
  { label: "Commissions", icon: CircleDollarSign },
];

type Candidate = { name: string; role: string; location: string; stage: string; tone: string; initials: string; updated: string; salary: string };

const candidates: Candidate[] = [
  { name: "Nadine Williams", role: "Front Office Manager", location: "Cape Town", stage: "Interview", tone: "violet", initials: "NW", updated: "Updated 18 min ago", salary: "R28k–R34k" },
  { name: "Thabo Mokoena", role: "Executive Sous Chef", location: "Johannesburg", stage: "Shortlisted", tone: "blue", initials: "TM", updated: "Updated 1 hr ago", salary: "R32k–R40k" },
  { name: "Amy Naidoo", role: "Guest Relations Manager", location: "Knysna", stage: "New", tone: "amber", initials: "AN", updated: "Updated yesterday", salary: "R24k–R29k" },
  { name: "Liam Jacobs", role: "Lodge Operations Manager", location: "Hoedspruit", stage: "Approved", tone: "emerald", initials: "LJ", updated: "Updated yesterday", salary: "R38k–R46k" },
];

const pipeline = [
  { label: "New", value: 8, color: "bg-slate-300", percent: "32%" },
  { label: "Screening", value: 6, color: "bg-amber-300", percent: "24%" },
  { label: "Interview", value: 5, color: "bg-violet-400", percent: "20%" },
  { label: "Approved", value: 3, color: "bg-emerald-400", percent: "12%" },
  { label: "Placed", value: 2, color: "bg-sky-400", percent: "8%" },
];

const activity = [
  { icon: CheckCircle2, tone: "green", title: "Liam Jacobs moved to Approved", meta: "Lodge Operations Manager · 26 min ago" },
  { icon: CalendarDays, tone: "purple", title: "Interview booked with Amy Naidoo", meta: "Guest Relations Manager · Tomorrow, 10:30" },
  { icon: CircleDollarSign, tone: "orange", title: "Placement commission updated", meta: "The Oyster Box · R42,500 · 2 hrs ago" },
];

export default function Home() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [mobileNav, setMobileNav] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [search, setSearch] = useState("");
  const [showParser, setShowParser] = useState(false);

  const filteredCandidates = useMemo(
    () => candidates.filter((candidate) => `${candidate.name} ${candidate.role} ${candidate.location}`.toLowerCase().includes(search.toLowerCase())),
    [search],
  );

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-slate-950">
      <aside className={`app-sidebar ${mobileNav ? "app-sidebar-open" : ""} ${sidebarCollapsed ? "app-sidebar-collapsed" : ""}`}>
        <button className="sidebar-reopen" aria-label="Open navigation" onClick={() => setSidebarCollapsed(false)}><Menu className="h-5 w-5" /></button>
        <div className="flex items-center justify-between px-5 pb-8 pt-6">
          <div className="flex items-center gap-3">
            <div className="brand-mark"><Zap className="h-4 w-4 fill-current" /></div>
            <div>
              <p className="font-display text-[17px] font-bold tracking-tight">Recruit Raptor</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Recruitment OS</p>
            </div>
          </div>
          <button className="mobile-close" onClick={() => setMobileNav(false)}><X className="h-4 w-4" /></button><button className="sidebar-collapse" aria-label="Collapse navigation" onClick={() => setSidebarCollapsed(true)}><Menu className="h-4 w-4" /></button>
        </div>
        <div className="px-3">
          <p className="eyebrow px-3 pb-3">Workspace</p>
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activeNav === item.label;
              return <button key={item.label} aria-label={item.label} title={item.label} onClick={() => { setActiveNav(item.label); setMobileNav(false); }} className={`nav-item ${active ? "nav-item-active" : ""}`}><Icon className="h-[17px] w-[17px]" /><span className="nav-label">{item.label}</span>{item.count && <span className={`ml-auto nav-count ${active ? "nav-count-active" : ""}`}>{item.count}</span>}</button>;
            })}
          </div>
          <p className="eyebrow px-3 pb-3 pt-9">Tools</p>
          <div className="space-y-1">
            <button aria-label="CV Parser" title="CV Parser" onClick={() => setShowParser(true)} className="nav-item"><FileSearch className="h-[17px] w-[17px]" /><span className="nav-label">CV Parser</span><span className="new-pill">AI</span></button>
            <button aria-label="Settings" title="Settings" onClick={() => setActiveNav("Settings")} className={`nav-item ${activeNav === "Settings" ? "nav-item-active" : ""}`}><Settings2 className="h-[17px] w-[17px]" /><span className="nav-label">Settings</span></button>
          </div>
        </div>
        <div className="mt-auto px-4 pb-5">
          <div className="upgrade-card">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10"><Sparkles className="h-4 w-4 text-amber-300" /></div>
            <p className="text-sm font-semibold text-white">Make every hire count.</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">Your workspace is ready for its next placement.</p>
            <button className="mt-4 flex items-center gap-1 text-xs font-semibold text-amber-300">View activity <ArrowUpRight className="h-3.5 w-3.5" /></button>
          </div>
          <div className="mt-5 flex items-center gap-3 border-t border-slate-800 pt-4"><div className="avatar avatar-sky">JM</div><div className="min-w-0 flex-1"><p className="truncate text-xs font-semibold text-white">Jesse McArthur</p><p className="text-[11px] text-slate-500">Workspace admin</p></div><MoreHorizontal className="h-4 w-4 text-slate-500" /></div>
        </div>
      </aside>

      <main className={`main-shell ${sidebarCollapsed ? "main-shell-expanded" : ""}`}>
        {sidebarCollapsed && <button className="workspace-menu-button" aria-label="Open navigation" onClick={() => setSidebarCollapsed(false)}><Menu className="h-4 w-4" /></button>}
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMobileNav(true)}><Menu className="h-5 w-5" /></button>
          <div className="flex items-center gap-2 text-sm text-slate-500"><span className="hidden sm:inline">Workspace</span><ChevronDown className="h-4 w-4" /><span className="font-semibold text-slate-950">Cape & Coast Talent</span></div>
          <div className="ml-auto flex items-center gap-3"><div className="status-dot" /><span className="hidden text-xs font-medium text-slate-500 sm:inline">All systems operational</span><div className="avatar avatar-dark">JM</div></div>
        </header>

        <div className="page-content">
          {activeNav === "Overview" ? <>
            <section className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><p className="eyebrow mb-2 text-slate-400">Tuesday, 14 October 2025</p><h1 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-[34px]">Good morning, Jesse <span className="wave">✦</span></h1><p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">Here is what is moving across your recruitment desk today.</p></div><div className="flex gap-2"><Button variant="outline" className="h-10 rounded-xl bg-white text-xs font-semibold shadow-sm" onClick={() => setShowParser(true)}><Upload className="mr-2 h-4 w-4" /> Upload CV</Button><Button className="h-10 rounded-xl bg-slate-950 px-4 text-xs font-semibold text-white shadow-sm hover:bg-slate-800" onClick={() => setActiveNav("Candidates")}><Plus className="mr-2 h-4 w-4" /> Add candidate</Button></div></section>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <MetricCard label="Commission earned" value="R186,400" detail="+18.4% vs last month" icon={CircleDollarSign} iconTone="orange" trend="up" />
              <MetricCard label="In review" value="24" detail="8 need your attention" icon={Users} iconTone="purple" trend="neutral" />
              <MetricCard label="Placed this month" value="6" detail="2 more than last month" icon={CheckCircle2} iconTone="green" trend="up" />
              <MetricCard label="Open vacancies" value="8" detail="Across 5 active clients" icon={BriefcaseBusiness} iconTone="blue" trend="neutral" />
            </section>

            <section className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
              <Card className="dashboard-card overflow-hidden"><CardHeader className="flex flex-row items-start justify-between border-b border-slate-100 pb-5"><div><p className="eyebrow mb-1">Pipeline health</p><CardTitle className="font-display text-xl">Recruitment overview</CardTitle></div><button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50"><MoreHorizontal className="h-5 w-5" /></button></CardHeader><CardContent className="p-5 sm:p-6"><div className="flex flex-col gap-6 sm:flex-row sm:items-center"><div className="relative flex h-36 w-36 shrink-0 items-center justify-center rounded-full" style={{ background: "conic-gradient(#8b5cf6 0 20%, #fbbf24 20% 44%, #38bdf8 44% 52%, #34d399 52% 64%, #cbd5e1 64% 100%)" }}><div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white"><span className="font-display text-3xl font-bold">24</span><span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Candidates</span></div></div><div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-4">{pipeline.map((item) => <div key={item.label} className="flex items-center justify-between gap-2"><div className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${item.color}`} /><span className="text-xs text-slate-500">{item.label}</span></div><span className="text-xs font-bold text-slate-900">{item.value}</span></div>)}</div></div><Separator className="my-6" /><div className="flex items-center justify-between text-xs"><span className="text-slate-400">Average time to placement</span><span className="font-semibold text-slate-700">18 days <span className="ml-1 text-emerald-600">↓ 3 days</span></span></div></CardContent></Card>
              <Card className="dashboard-card"><CardHeader className="border-b border-slate-100 pb-5"><p className="eyebrow mb-1">This month</p><CardTitle className="font-display text-xl">Commission pulse</CardTitle></CardHeader><CardContent className="p-5 sm:p-6"><div className="flex items-end justify-between"><div><p className="font-display text-3xl font-bold tracking-tight">R72,800</p><p className="mt-1 text-xs text-slate-400">Expected from 4 placements</p></div><Badge className="border-0 bg-emerald-50 text-[10px] font-semibold text-emerald-700">On track</Badge></div><div className="mt-7 flex h-20 items-end gap-2">{[28, 38, 30, 52, 44, 62, 49, 72, 64, 82, 73, 92].map((height, index) => <div key={index} className={`flex-1 rounded-t-md ${index === 11 ? "bg-slate-900" : "bg-slate-100"}`} style={{ height: `${height}%` }} />)}</div><div className="mt-3 flex justify-between text-[10px] uppercase tracking-widest text-slate-400"><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span></div></CardContent></Card>
            </section>

            <section className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]"><Card className="dashboard-card"><CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-5"><div><p className="eyebrow mb-1">Priority queue</p><CardTitle className="font-display text-xl">Candidates needing attention</CardTitle></div><Button variant="ghost" className="h-8 text-xs font-semibold text-slate-500" onClick={() => setActiveNav("Candidates")}>View all <ArrowUpRight className="ml-1 h-3.5 w-3.5" /></Button></CardHeader><CardContent className="divide-y divide-slate-100 p-0">{filteredCandidates.slice(0, 3).map((candidate) => <CandidateRow key={candidate.name} candidate={candidate} />)}</CardContent></Card><Card className="dashboard-card"><CardHeader className="border-b border-slate-100 pb-5"><p className="eyebrow mb-1">Live feed</p><CardTitle className="font-display text-xl">Recent activity</CardTitle></CardHeader><CardContent className="space-y-5 p-5 sm:p-6">{activity.map((item) => { const Icon = item.icon; return <div key={item.title} className="flex gap-3"><div className={`activity-icon activity-${item.tone}`}><Icon className="h-4 w-4" /></div><div><p className="text-xs font-semibold leading-5 text-slate-800">{item.title}</p><p className="mt-0.5 text-[11px] leading-5 text-slate-400">{item.meta}</p></div></div>; })}</CardContent></Card></section>
          </> : <WorkspaceView activeNav={activeNav} search={search} setSearch={setSearch} candidates={filteredCandidates} setShowParser={setShowParser} />}
        </div>
      </main>

      {showParser && <ParserModal onClose={() => setShowParser(false)} />}
    </div>
  );
}

function MetricCard({ label, value, detail, icon: Icon, iconTone, trend }: { label: string; value: string; detail: string; icon: typeof CircleDollarSign; iconTone: string; trend: string }) { return <Card className="dashboard-card metric-card"><CardContent className="p-5"><div className="flex items-start justify-between"><div><p className="text-xs font-medium text-slate-400">{label}</p><p className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-950">{value}</p></div><div className={`metric-icon metric-${iconTone}`}><Icon className="h-4 w-4" /></div></div><div className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-400">{trend === "up" && <span className="font-bold text-emerald-600">↗</span>}<span>{detail}</span></div></CardContent></Card> }

function CandidateRow({ candidate }: { candidate: Candidate }) { return <div className="flex items-center gap-3 px-5 py-4 transition-colors hover:bg-slate-50 sm:px-6"><div className={`avatar avatar-${candidate.tone}`}>{candidate.initials}</div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><p className="truncate text-xs font-semibold text-slate-900">{candidate.name}</p><Badge className={`stage-${candidate.tone} border-0 px-2 py-0.5 text-[10px] font-semibold`}>{candidate.stage}</Badge></div><p className="mt-1 truncate text-[11px] text-slate-400">{candidate.role} · {candidate.location}</p></div><div className="hidden text-right sm:block"><p className="text-[11px] font-semibold text-slate-600">{candidate.salary}</p><p className="mt-1 text-[10px] text-slate-400">{candidate.updated}</p></div><MoreHorizontal className="h-4 w-4 text-slate-300" /></div> }

function WorkspaceView({ activeNav, search, setSearch, candidates, setShowParser }: { activeNav: string; search: string; setSearch: (value: string) => void; candidates: Candidate[]; setShowParser: (value: boolean) => void }) { const title = activeNav === "Settings" ? "Settings" : activeNav; const description = activeNav === "Candidates" ? "Manage your candidate pipeline and keep every conversation moving." : activeNav === "Vacancies" ? "Track active roles, briefs, and hiring momentum across your clients." : activeNav === "Clients" ? "Keep client relationships, agreements, and open searches in one place." : activeNav === "Placements" ? "Follow every approved candidate through start date and guarantee." : activeNav === "Commissions" ? "Track earned, expected, and outstanding commission across placements." : activeNav === "Settings" ? "Configure your workspace, users, AI providers, and data preferences." : "Keep your recruitment workspace clear, focused, and ready for the next hire."; return <section><div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow mb-2 text-slate-400">Workspace / {activeNav}</p><h1 className="font-display text-3xl font-bold tracking-tight">{title}</h1><p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">{description}</p></div><div className="flex gap-2"><Button variant="outline" className="h-10 rounded-xl bg-white text-xs font-semibold"><Filter className="mr-2 h-4 w-4" /> Filter</Button><Button className="h-10 rounded-xl bg-slate-950 text-xs font-semibold text-white" onClick={() => activeNav === "Candidates" ? setShowParser(true) : undefined}><Plus className="mr-2 h-4 w-4" /> {activeNav === "Candidates" ? "Add candidate" : "Add record"}</Button></div></div>{activeNav === "Candidates" ? <><div className="mb-5 flex flex-col gap-3 sm:flex-row"><div className="relative max-w-sm flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search candidates..." className="h-10 rounded-xl border-slate-200 bg-white pl-9 text-xs" /></div><Tabs defaultValue="all"><TabsList className="h-10 rounded-xl bg-white"><TabsTrigger value="all" className="text-xs">All 24</TabsTrigger><TabsTrigger value="attention" className="text-xs">Needs attention 8</TabsTrigger></TabsList></Tabs></div><div className="grid gap-4 lg:grid-cols-2">{candidates.map((candidate) => <CandidateCard key={candidate.name} candidate={candidate} />)}</div></> : activeNav === "Settings" ? <SettingsPanel /> : <PlaceholderBoard activeNav={activeNav} />}</section> }

function CandidateCard({ candidate }: { candidate: Candidate }) { return <Card className="dashboard-card group transition-all hover:-translate-y-0.5 hover:shadow-lg"><CardContent className="p-5"><div className="flex items-start justify-between"><div className="flex items-center gap-3"><div className={`avatar avatar-${candidate.tone} h-11 w-11 text-sm`}>{candidate.initials}</div><div><p className="text-sm font-semibold text-slate-900">{candidate.name}</p><p className="mt-1 text-xs text-slate-400">{candidate.location}</p></div></div><button className="rounded-lg p-1.5 text-slate-300 hover:bg-slate-50 hover:text-slate-500"><MoreHorizontal className="h-4 w-4" /></button></div><div className="mt-5 rounded-xl bg-slate-50 px-3 py-3"><p className="text-xs font-semibold text-slate-800">{candidate.role}</p><div className="mt-2 flex items-center gap-3 text-[11px] text-slate-400"><span>{candidate.salary}</span><span>·</span><span>Hospitality</span></div></div><div className="mt-4 flex items-center justify-between"><Badge className={`stage-${candidate.tone} border-0 px-2 py-1 text-[10px] font-semibold`}>{candidate.stage}</Badge><span className="text-[10px] text-slate-400">{candidate.updated}</span></div></CardContent></Card> }

function PlaceholderBoard({ activeNav }: { activeNav: string }) { const records = activeNav === "Vacancies" ? [{ title: "Front Office Manager", sub: "The Marine · Hermanus", tag: "Urgent", color: "stage-violet" }, { title: "Executive Sous Chef", sub: "The Silo Hotel · Cape Town", tag: "Open", color: "stage-blue" }, { title: "Lodge Operations Manager", sub: "Klaserie Sands · Limpopo", tag: "Shortlist", color: "stage-emerald" }] : activeNav === "Clients" ? [{ title: "The Oyster Box", sub: "Luxury hospitality · 3 active roles", tag: "Active", color: "stage-emerald" }, { title: "The Silo Hotel", sub: "Boutique hotel · 2 active roles", tag: "Active", color: "stage-blue" }, { title: "Klaserie Sands", sub: "Safari lodge · 1 active role", tag: "Follow-up", color: "stage-amber" }] : activeNav === "Placements" ? [{ title: "Liam Jacobs", sub: "Lodge Operations Manager · Klaserie Sands", tag: "Starting 04 Nov", color: "stage-emerald" }, { title: "Nadine Williams", sub: "Front Office Manager · The Marine", tag: "Offer sent", color: "stage-violet" }] : [{ title: "October placements", sub: "6 completed placements", tag: "R186,400", color: "stage-emerald" }, { title: "Outstanding invoices", sub: "3 invoices awaiting payment", tag: "R54,200", color: "stage-amber" }]; return <Card className="dashboard-card"><CardContent className="divide-y divide-slate-100 p-0">{records.map((record) => <div key={record.title} className="flex items-center gap-4 px-5 py-5 sm:px-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500">{activeNav === "Clients" ? <Building2 className="h-5 w-5" /> : activeNav === "Vacancies" ? <BriefcaseBusiness className="h-5 w-5" /> : activeNav === "Placements" ? <Target className="h-5 w-5" /> : <CircleDollarSign className="h-5 w-5" />}</div><div className="min-w-0 flex-1"><p className="text-sm font-semibold text-slate-900">{record.title}</p><p className="mt-1 truncate text-xs text-slate-400">{record.sub}</p></div><Badge className={`${record.color} border-0 text-[10px] font-semibold`}>{record.tag}</Badge><MoreHorizontal className="h-4 w-4 text-slate-300" /></div>)}</CardContent></Card> }

function SettingsPanel() { return <div className="grid gap-5 lg:grid-cols-[0.65fr_1.35fr]"><Card className="dashboard-card"><CardContent className="space-y-1 p-3"><p className="eyebrow px-3 pb-2 pt-1">Workspace settings</p>{["Profile & branding", "Team members", "AI providers", "Commission rules", "Data & privacy"].map((item, index) => <button key={item} className={`settings-nav ${index === 0 ? "settings-nav-active" : ""}`}>{item}{index === 2 && <Badge className="ml-auto border-0 bg-amber-100 text-[9px] text-amber-800">AI</Badge>}</button>)}</CardContent></Card><Card className="dashboard-card"><CardHeader><p className="eyebrow mb-1">Profile & branding</p><CardTitle className="font-display text-xl">Make it yours</CardTitle></CardHeader><CardContent className="space-y-5"><div className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-semibold text-slate-600">Agency name<Input className="mt-2 h-10 rounded-xl text-sm" defaultValue="Cape & Coast Talent" /></label><label className="text-xs font-semibold text-slate-600">Default currency<div className="mt-2 flex h-10 items-center rounded-xl border border-slate-200 bg-white px-3 text-sm">ZAR — South African Rand</div></label></div><label className="block text-xs font-semibold text-slate-600">Workspace description<Textarea className="mt-2 rounded-xl text-sm" defaultValue="Hospitality and tourism recruitment across Southern Africa." /></label><div className="flex justify-end"><Button className="rounded-xl bg-slate-950 text-xs font-semibold text-white">Save changes</Button></div></CardContent></Card></div> }

function ParserModal({ onClose }: { onClose: () => void }) { const [uploaded, setUploaded] = useState(false); return <div className="modal-backdrop" onClick={onClose}><div className="modal-card" onClick={(event) => event.stopPropagation()}><div className="flex items-start justify-between"><div><div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700"><Sparkles className="h-5 w-5" /></div><h2 className="font-display text-xl font-bold">Parse a CV with AI</h2><p className="mt-1 max-w-sm text-xs leading-5 text-slate-500">Upload a PDF or document and we will prepare a candidate card for your review.</p></div><button onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"><X className="h-4 w-4" /></button></div><button onClick={() => setUploaded(true)} className={`mt-7 flex w-full flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-10 text-center transition-colors ${uploaded ? "border-emerald-300 bg-emerald-50" : "border-slate-300 bg-slate-50 hover:border-violet-300 hover:bg-violet-50/50"}`}><div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-full ${uploaded ? "bg-emerald-100 text-emerald-700" : "bg-white text-violet-600 shadow-sm"}`}>{uploaded ? <CheckCircle2 className="h-5 w-5" /> : <Upload className="h-5 w-5" />}</div><p className="text-sm font-semibold text-slate-800">{uploaded ? "Nadine_Williams_CV.pdf selected" : "Drop a CV here or browse files"}</p><p className="mt-1 text-xs text-slate-400">PDF, DOC, or DOCX · up to 10 MB</p></button>{uploaded && <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-violet-700"><FileSearch className="h-4 w-4" /></div><div className="flex-1"><p className="text-xs font-semibold">Ready for extraction</p><p className="mt-1 text-[11px] text-slate-400">Using Gemini · gemini-2.5-flash</p></div><Badge className="border-0 bg-emerald-50 text-[10px] text-emerald-700">Connected</Badge></div></div>}<div className="mt-6 flex justify-end gap-2"><Button variant="ghost" onClick={onClose} className="rounded-xl text-xs">Cancel</Button><Button disabled={!uploaded} className="rounded-xl bg-slate-950 text-xs font-semibold text-white disabled:opacity-40">Extract candidate details <ArrowUpRight className="ml-2 h-3.5 w-3.5" /></Button></div></div></div> }
