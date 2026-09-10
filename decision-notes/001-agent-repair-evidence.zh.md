---
title: 報告找到 17 個問題，真的都要修嗎？
date: 2026-08-23
updated: 2026-09-07
status: review
author_review: pending_version_confirmation
publication_status: pending
lang: zh-TW
brand: Chieh Wei Huang
type: decision-note
source_page: zh-decision-note-agent-repair.html
sync: mirrored
tags:
  - decision-notes
  - ai-agents
  - evidence
  - verification
  - professional-writing
---

# 報告找到 17 個問題，真的都要修嗎？

> [!note] 同步狀態
> 作者已表達願意對外發表，但尚待確認這一版文章內容與發布授權。Markdown 與網站 repo／vault 同名檔案保持一致；網頁版另以 HTML 保存。

## Decision Question

**一條自動化 finding，什麼時候足以讓 AI agent 直接修改公開網站？**

答案不能由 finding 的數量或 severity 單獨決定。先區分這次修改是要修復已確認的問題，還是用來驗證一個假設，再說清楚預期結果、如何檢查，以及失敗時怎麼回退。

## 我想減少的是反覆修改

我常讓 AI agent 直接修改程式碼。真正讓我困擾的，是同一個問題為什麼要來回修改那麼多次。

我原本以為，給 agent 一份檢測報告，它就會知道該改什麼。後來我發現：報告找到問題，不代表它已經說清楚正確答案。於是我拿自己正在改版的專業網站來測。

## 同一個首頁，兩種檢查範圍

我用自己維護的 [Beacon](https://chiehweihuang.github.io/beacon/zh-Hant.html) 檢查中文版首頁。Beacon 會讀原始碼，也會在瀏覽器裡量測畫面，目的是讓人或 agent 知道下一步可能要處理什麼。

第一次只掃原始碼：72 分、48% coverage、4 個 findings，其中 2 個標成 critical。

加入瀏覽器量測後，分數升到 78，coverage 也提高到 61%。但 findings 反而從 4 個增加成 17 個。

檢查範圍擴大後，清單也變長了。單憑這個變化，無法判斷網站是否變差。這裡的 coverage 是 Beacon 計分權重中已有量測的占比，不是整個網站無障礙問題的檢出率，也不是成功率。

## 為什麼 17 不等於 17 件待辦

數字也不是直接相加：原本 4 項中有 1 項是「對比尚未驗證」。從保留的摘要與 finding 清單判讀，合併後移除了這項提醒，再加入 14 項觸控 review，才成為 17 項（4 − 1 + 14）。這裡混合了已量測結果、待確認提醒與改善建議，不能直接當成工程工作量。

8 月 29 日保留下來的工具輸出，記錄了 110 個文字對比 pass、0 個 contrast fail。這是工具的量測判定，並非人工逐項覆核。這些 pass 進入計分與 coverage，卻不會出現在醒目的「問題數量」裡。

新增的 14 個 findings 都是觸控尺寸的 `review`。它們不是已確認的 WCAG 違規：24×24 CSS px 是 WCAG 2.2 AA 的最低尺寸要求，包含間距與行內連結等例外；44×44 CSS px 則是 AAA 的加強要求，也有自己的例外。不能把低於 44px 直接當作 AA 違規。相同元件也在兩個 viewport 各被列一次。它們值得設計判斷，但不是 14 件可直接派給 agent 的修正工作。

歷史輸出中的 2 個 critical 都來自「click handler 附近沒有 keyboard handler」的判定。我接著檢查目前版本的兩個相關處理函式：一個綁在原生 `<button>` 上，鍵盤本來就能觸發；另一個只是在 document 層記錄 Email 連結的 analytics，鍵盤開啟連結同樣會產生 click。這是目前版本的行為解讀，還需要下面的操作測試確認，不能據此判定舊版本完全相同。

## 我補做了什麼驗證

2026 年 9 月 5 日，我把當前首頁、腳本與樣式另存成測試快照，在 320px 與 1280px 兩種寬度下實際用 Tab 到達主題按鈕與 Email 連結。Enter 與空白鍵各讓主題切換一次，aria-pressed 也跟著更新；Email 連結的 Enter 操作則各觸發一次原有的統計函式。

測試攔截了外部網路請求與 Email 預設開啟動作，因此沒有傳送統計資料，也沒有寄信。這個新結果支持保留目前兩個 handler，不因為缺少額外鍵盤 handler 就修改。它不是舊版本的完整重現，也不是 agent 實際修復的比較實驗。

[歷史輸出摘錄](evidence/2026-08-29-tool-output.md) · [新測試結果與檔案雜湊](evidence/2026-09-05-keyboard/result.json) · [重跑方式與限制](evidence/2026-09-05-keyboard/README.md)

## 如果我叫 agent「全部修掉」

它可能替原生按鈕加上多餘的 keyboard handler，把同一次操作觸發兩遍；也可能放大所有連結，只因為報告把「更舒適」和「不符合最低要求」放在同一份 findings 清單裡。

這是我根據元件行為提出的風險推論，不是這次實際觀察到的 agent 失誤。本次沒有讓 agent 分別依兩種報告修復，也沒有量到返工次數，因此還不能說這種報告已經造成返工，或我的分類能減少返工。

## 我現在怎麼看一份報告

我不會再把 finding 直接當成待辦。先問四件事：

1. 這是已確認的失敗、改善建議，還是仍待人工判斷？
2. 同一個問題是否因為 viewport 或頁面不同而重複計數？
3. 報告是否理解元件與產品脈絡，而不只看到程式碼片段？
4. 修改後，是否有正向證據證明已經通過並可以停止？

對已確認的問題，我會交代預期結果、修改範圍、重跑方式與回退方法，再讓 agent 修復。原因還不清楚時，也可以透過修改來做實驗：先說明要驗證哪個假設、觀察什麼、何時停止，以及如何恢復。實驗中的修改不能先稱為修好了；只有指定行為通過驗證，才能結束這一項修復。

## 這次也改變了我對 Beacon 的要求

Beacon 原本有一個明確缺口：瀏覽器測試即使全部通過，合併後的報告仍可能寫著「尚未驗證」。我已修正這一段，讓乾淨的量測也成為 pass evidence，並留下回歸測試。

當時的測試也提出兩項後續要求：分開失敗、改善建議、可能誤報與通過項目，以及避免把跨 viewport 的重複結果當成工作量。2026 年 9 月 5 日重新檢查程式與測試時，已有 clean pass、review 呈現與部分觸控結果去重的回歸測試，相關 44 項測試通過。這證明指定案例受到檢查，仍不能證明報告容易理解或所有結果都分類正確。

## 目前判斷與下一步

**自動化報告可以協助 agent 找方向；它不是每一條 finding 的修正授權。**

這次只測了一個網站、一套工具，也沒有比較不同 agent 真的會怎麼修改。下一步會用 Bright Raven 的真實頁面重複測試：同樣的報告分類能不能成立，以及加入 actionability 後，來回修改是否真的變少。

## 讀者可以拿它做什麼決定

如果你剛讓 agent 產出或修改網站，接著收到一份檢測報告，這篇筆記可以幫你決定：哪些項目現在交給 agent 修、哪些先補測、哪些需要你說清楚想要的結果。

以這次的按鈕警告為例，我會先驗證鍵盤能否完成操作、是否只觸發一次。若原本就能正確操作，便沒有理由只為消除掃描器警告而加 handler；若確實失效，才針對可重現的行為修正。讀者不必親自逐行看程式，但需要看得懂「要保留什麼行為，以及怎麼確認它還在」。

這個案例能展示我如何檢查從報告到行動之間的假設。它還不能證明這套方法能降低團隊成本，也不能證明有人願意付費買這種判斷。

## 什麼證據會讓我改變判斷

如果報告已經附上可重現的失敗、明確的預期行為與重跑方式，agent 也能在保留既有功能的前提下完成修正，那麼對這類已限定的項目，我會接受報告直接成為修改指令，不必每次再人工解讀。

反過來，如果先分類報告並沒有減少錯修或返工，反而增加更多人工時間，我會縮小或放棄這道人工步驟。不是每個 finding 都值得額外審查。

## 下一次怎麼驗證

選一個允許修改的真實頁面，凍結同一版原始檔與報告，從兩份相同副本開始。一次讓 agent 依原報告處理；另一次提供經解讀的修正清單，交代預期行為、保留條件與停止條件。兩邊使用相同模型版本、工具、初始任務與執行預算，並保留提示、diff 與每次驗證結果。

比較的是原有問題是否解決、是否引入回歸、需要多少次返工，以及人花了多少解讀與確認時間。不能只比最後的報告分數。單次配對只用來檢查實驗是否可行；不同任務的重複結果才可能支持方法有效。

## Decision history

- **起點：**自動化 finding 是否足以讓 agent 直接修正？
- **目前決定：**不把這份清單整批交給 agent 當作修正指令。本文分析了兩項鍵盤警告與觸控尺寸 review；沒有逐條展示全部 17 項的處置依據，因此不宣稱已完成全清單 triage。
- **產品後果：**Beacon 已補上 clean pass evidence；部分 review 與去重行為已有測試，實際報告是否更能引導正確行動仍待驗證。

## 測試範圍與重現資訊

初稿起於 2026 年 8 月 23 日。本文數字以 8 月 29 日重跑時保存的工具輸出為依據：原始碼掃描涵蓋 zh.html、site.js、style.css，瀏覽器量測為 320×720 與 1280×900。2026 年 9 月 5 日找回這段輸出，但原始 JSON 暫存檔與當時的完整原始碼快照未能找回。因此可以核對當時報告過的數字，不能宣稱已具備相同版本的完整重現條件。9 月 5 日的鍵盤測試另有原始檔、瀏覽器版本、雜湊與結果可查；它只支持該版本的指定操作。真正的瀏覽器 200% zoom、螢幕閱讀器與使用者任務完成，均不在這份鍵盤證據範圍內。

## 來源

- [W3C WAI：Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/)
- [W3C：Understanding WCAG 2.2 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [W3C ACT Rules Format 1.1](https://www.w3.org/TR/act-rules-format/)
- [axe-core API](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md)
- [Lighthouse accessibility scoring](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)
- [Olausson 等人，〈Is Self-Repair a Silver Bullet for Code Generation?〉](https://www.microsoft.com/en-us/research/publication/is-self-repair-a-silver-bullet-for-code-generation/)
- [Beacon 原始碼](https://github.com/chiehweihuang/beacon)
