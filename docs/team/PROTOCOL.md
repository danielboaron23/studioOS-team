# studioOS team protocol

How the multi-bot product team ships **any** feature in `danielboaron23/studioOS-team`, from request to a merged PR.
Repo: `danielboaron23/studioOS-team` (standalone, default branch `main`). All branches, PRs and reviews happen here. There is no fork and no upstream PR: after G2, Daniel merges the feature PR into `main`.

Before acting, every bot reads `CLAUDE.md` and `project-context.md` in the repo root, then the feature's board Issue.

> הערה: כל האישורים של דניאל קורים רק בחדר, ורק בפורמט שמופיע למטה.

---

## 1. How a feature runs

1. **Request.** Daniel describes a feature in the Product Team room. If nobody is tagged, CoS routes it to studioOS PM.
2. **Board Issue.** PM opens one Issue from `.github/ISSUE_TEMPLATE/feature-spec.md`, titled `<Feature> — spec & board`, with up to 5 numbered decisions (one recommendation each).
3. **G0 — Spec.** Daniel writes `מאשר G0` (and `מאשר 1,3` for decisions) in the room.
4. **Research / Copy** if the Issue assigns them.
5. **Design.** Designer builds Figma frames for every state → **G1**.
6. **Build.** Designer: `ui/<feature>` (primitives + stories). Prototype: `feature/<name>`, PR into `main`, posts the **Vercel preview URL after every push**.
7. **Check.** QA tests the preview; PR Review reviews the PR. Prototype fixes until both pass.
8. **G2 — Preview.** Daniel approves on the preview link (`מאשר G2`) and merges the PR into `main`.

---

## 2. Roles

| Bot | Owns | Never does |
|---|---|---|
| **Chief of Staff (CoS)** | Runs the process: routing when nobody is tagged, gate tracking, approvals ledger in the board Issue. | Writes spec, design, copy, or code; changes scope. |
| **studioOS PM** | The spec and the board Issue (from `.github/ISSUE_TEMPLATE/feature-spec.md`). Keeps scope, acceptance criteria, owners table and gate ledger current. | Writes code or design. |
| **Competitor Research** | Research **only when assigned** in the board Issue's owner table, from **public sources** only, with links. | Starts work on its own; uses private or paywalled data. |
| **studioOS Product Designer** | Design in **Figma only**. After **G1** it is the **sole owner** of `components/ui/**` and their stories, on a branch named `ui/<feature>`. | Touches `app/**` or feature code. |
| **studioOS Copy** | All user-facing strings in `content/<feature>-copy.md`. | Edits code; strings in code must come from this file. |
| **studioOS Prototype** | The **only** bot that writes feature code, on `feature/<name>`. Posts the **Vercel preview URL after every push**. | Edits `components/ui/**` after G1 (asks Designer); adds unapproved dependencies; merges. |
| **studioOS QA** | Tests **only the Vercel preview URL**: light + dark, desktop + 390px width, every nav link. Posts **one** PASS/FAIL message with screenshots. | Runs things locally; asks Daniel to run anything. |
| **studioOS PR Review** | Reviews **only open PRs** on `danielboaron23/studioOS-team`. | Reviews branches without a PR; merges. |

> הערה: Prototype הוא היחיד שכותב קוד פיצ'ר. Designer הוא הבעלים היחיד של `components/ui` אחרי G1.

---

## 3. Flow and gates

```
Request ──► G0 Spec ──► G1 Design ──► build (PR into main) ──► G2 Preview approval ──► Daniel merges
             (PM)        (Designer)    (Prototype + Copy,        (Daniel)
                                        QA, PR Review)
```

| Gate | What is approved | Evidence in the board Issue | Who approves |
|---|---|---|---|
| **G0 — Spec** | Goal, scope in/out, user flow, acceptance criteria, decisions | Spec sections filled, decisions numbered | Daniel, in the room |
| **G1 — Design** | Figma frames for every state (light/dark, desktop/390px) | Figma link(s) in the owner table | Daniel, in the room |
| **G2 — Preview** | The running feature on the Vercel preview link | Preview URL + QA PASS + PR Review approve | Daniel, in the room |

After G2, Daniel merges the feature PR into `main`. No bot merges or pushes to `main`.

CoS records every approval in the board Issue's **Gate ledger** (gate, who, when, link to the message).

---

## 4. Room rules

1. **Only the tagged bot replies.** Untagged bots stay silent.
2. **When nobody is tagged**, CoS sends **one** routing message (who should pick it up, and why). Nobody else replies.
3. **Approvals happen only in the room**, in exactly this form:
   - `מאשר G0` / `מאשר G1` / `מאשר G2` — approves a gate.
   - `מאשר 1,3` — approves numbered decisions 1 and 3 from the board Issue.
   Anything else (a 👍, "looks good", "go", a DM) is **not** an approval.
4. **Nobody sends Daniel terminal commands or localhost URLs.** Daniel only gets links: board Issue, Figma, Vercel preview, PR.
5. **One message per turn.** Combine status, links and questions into a single message.
6. **Hebrew, short and practical.** Times in Asia/Jerusalem.

> הערה: אין לשלוח לדניאל פקודות טרמינל או `localhost`. רק לינקים.

---

## 5. Definition of Done

A feature is done only when **all** are true:

- [ ] Vercel build is green and the PR has a working **preview link**.
- [ ] **QA PASS** on the preview (light + dark, desktop + 390px, every nav link), with screenshots.
- [ ] **PR Review approve** on the PR.
- [ ] **No unapproved dependencies** (any new package was a numbered decision approved with `מאשר N`).
- [ ] Follows `CLAUDE.md` conventions (existing tokens, `cn()`, lucide icons, assets imported, no hardcoded paths).
- [ ] **Stories** exist for every new component.
- [ ] All user-facing **strings come from `content/<feature>-copy.md`**.
- [ ] Daniel's **G2** (`מאשר G2`) is recorded in the Gate ledger.

---

## 6. Preview without terminal

Goal: Daniel reviews everything from a link. No local runs.

- Vercel is connected to `danielboaron23/studioOS-team`; every push to any branch gets a preview URL.
- **Previews are served at the domain root** (e.g. `https://<project>-git-<branch>.vercel.app/<route>`).
- Prototype posts the preview URL in the room and in the board Issue after every push.
- Preview deployments must open without a Vercel login (Deployment Protection off for previews).

---

## 7. Branch naming

| Branch | Owner | Purpose |
|---|---|---|
| `main` | Daniel (merges) | Default branch. Feature branches start here; PRs target it. |
| `feature/<name>` | studioOS Prototype | Feature code. One per feature. |
| `ui/<feature>` | studioOS Product Designer | `components/ui/**` + stories, after G1. |
| `team/<topic>` | CoS | Process docs and templates (like this file). |

Rules: lowercase, kebab-case (`feature/<name>`, `ui/<feature>`). Copy lives in `content/<feature>-copy.md` on the feature branch. All PRs target `main` in `danielboaron23/studioOS-team`. Existing branches in the repo are left as they are unless the board Issue says otherwise.
