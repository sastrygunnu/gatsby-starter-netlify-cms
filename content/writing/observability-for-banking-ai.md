---
title: "Observability, not policy, is the start of banking AI"
description: "A team can write good rules for AI use. If they cannot see what the system is doing in production, the rules are weak."
date: "2026-07-28"
---

AI governance in banking should not start with a policy document. It should start with observability.

A team can write good rules for AI use. If they cannot see what the system is doing in production, those rules are weak. This matters more in banking because a small mistake can affect trust, compliance, and the customer sitting in the middle of a journey.

Think about an assistant that helps a customer understand why an account-opening application is pending. The answer may depend on document status, identity checks, address validation, and a core banking update. If the assistant gives a confident but wrong answer, the issue is not only the model. It may be a missing API response, stale data, unclear prompt logic, or no guardrail for uncertain cases.

That is a production problem. It looks like a language problem.

Good teams log more than errors. They track user intent, source systems used, confidence, fallback paths, response time, and the cases where the system refused or escalated. They review real examples, not only dashboards. A dashboard that says “99.2% success” does not tell you whether the 0.8% were polite refusals or customers who were told the wrong reason their ID failed.

Logs have to be useful without becoming a second copy of the customer’s private life. Architecture and governance meet there. You need enough trace to explain a decision after the fact. You do not need to keep raw documents next to the prompt.

Define what good behavior means before launch. Not only uptime. Answer quality. Escalation rate. Policy alignment. Repeated confusion points. Drop-off after the assistant spoke. If those signals are missing, you cannot tell the difference between a system that is working and a system that is quietly teaching customers the wrong next step.

In a digital onboarding flow, an assistant that misstates proof-of-address requirements can send a person to photograph the wrong document, fail verification, and abandon the application. Support then sees a “user error.” The architecture sees an unobserved answer.

My recommendation is simple: do not scale AI agents in regulated systems until you can explain their behavior after the fact. Speed is useful. Traceability is what makes the system safe to operate.

The programs that last will look less like demos and more like well-run production platforms. Before you trust an agent in a banking workflow, ask what you would inspect after it is wrong.
