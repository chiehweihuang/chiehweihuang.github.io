# Historical tool output recovered on 2026-09-05

Source: locally retained tool response dated 2026-08-29T04:13:44.833Z.
The extract below starts at the JSON summary and preserves the reported summaries
and selected finding fields. Shell banners and unrelated conversation were omitted;
line endings were normalized to LF.

This is a transcript extract, not the original audit JSON. The original temporary
files are no longer available at the recorded location. The source snapshot, browser
version and complete engine fingerprint were not recovered. These numbers establish
what the tool reported on 2026-08-29, not independently verified accessibility or
byte-identical reproducibility of the earlier 2026-08-23 run.

The raw touch titles include sub-24px heights alongside “meets the 24px floor”.
That wording is preserved as reported; it does not establish satisfaction of the
size requirement or an exception.

```text
{
  "tier1_summary": {
    "overall_score": 72,
    "coverage_percent": 48,
    "category_weights": {
      "screenreader": 18,
      "keyboard": 13,
      "contrast": 13,
      "forms": 13,
      "responsive": 12,
      "touch": 8,
      "cognitive": 8,
      "motion": 5,
      "media": 5,
      "agent": 5
    },
    "scope_weight": 100,
    "applicable_weight": 82,
    "applicable_weight_percent": 82,
    "scored_weight": 48,
    "not_applicable_weight": 18,
    "life_safety_flag": false,
    "score_bands": [
      {
        "min": 90,
        "id": "pass"
      },
      {
        "min": 50,
        "id": "needs-work"
      },
      {
        "min": 0,
        "id": "fail"
      }
    ],
    "total_findings": 4,
    "critical": 2,
    "warnings": 0,
    "tips": 2,
    "unverifiable": 13,
    "categories": [
      {
        "id": "contrast",
        "name": "Color & Contrast",
        "pass": 0,
        "fail": 0,
        "review": 4,
        "state": "not-machine-checkable",
        "score": null,
        "thin": false
      },
      {
        "id": "keyboard",
        "name": "Keyboard Navigation",
        "pass": 1,
        "fail": 2,
        "review": 0,
        "state": "scored",
        "score": 9,
        "thin": false
      },
      {
        "id": "screenreader",
        "name": "Screen Reader",
        "pass": 21,
        "fail": 0,
        "review": 0,
        "state": "scored",
        "score": 100,
        "thin": false
      },
      {
        "id": "forms",
        "name": "Forms",
        "pass": 0,
        "fail": 0,
        "review": 0,
        "state": "not-applicable",
        "score": null,
        "thin": false
      },
      {
        "id": "responsive",
        "name": "Responsive & Reflow",
        "pass": 1,
        "fail": 0,
        "review": 0,
        "state": "scored",
        "score": 100,
        "thin": true
      },
      {
        "id": "touch",
        "name": "Touch & Targets",
        "pass": 0,
        "fail": 0,
        "review": 3,
        "state": "not-machine-checkable",
        "score": null,
        "thin": false
      },
      {
        "id": "cognitive",
        "name": "Cognitive",
        "pass": 0,
        "fail": 0,
        "review": 3,
        "state": "not-machine-checkable",
        "score": null,
        "thin": false
      },
      {
        "id": "motion",
        "name": "Motion & Animation",
        "pass": 0,
        "fail": 0,
        "review": 0,
        "state": "not-applicable",
        "score": null,
        "thin": false
      },
      {
        "id": "media",
        "name": "Media",
        "pass": 0,
        "fail": 0,
        "review": 3,
        "state": "not-machine-checkable",
        "score": null,
        "thin": false
      },
      {
        "id": "agent",
        "name": "Agent Operability & AEO",
        "pass": 2,
        "fail": 1,
        "review": 0,
        "state": "scored",
        "score": 66,
        "thin": false
      }
    ]
  },
  "tier2_summary": {
    "total_findings": 14,
    "critical": 0,
    "warnings": 0,
    "tips": 14,
    "by_viewport": [
      {
        "viewport": "320x720",
        "contrast_samples": 55,
        "touch_targets": 18,
        "findings": 7
      },
      {
        "viewport": "1280x900",
        "contrast_samples": 55,
        "touch_targets": 18,
        "findings": 7
      }
    ]
  },
  "merged_summary": {
    "overall_score": 78,
    "coverage_percent": 61,
    "category_weights": {
      "screenreader": 18,
      "keyboard": 13,
      "contrast": 13,
      "forms": 13,
      "responsive": 12,
      "touch": 8,
      "cognitive": 8,
      "motion": 5,
      "media": 5,
      "agent": 5
    },
    "scope_weight": 100,
    "applicable_weight": 82,
    "applicable_weight_percent": 82,
    "scored_weight": 61,
    "not_applicable_weight": 18,
    "life_safety_flag": false,
    "score_bands": [
      {
        "min": 90,
        "id": "pass"
      },
      {
        "min": 50,
        "id": "needs-work"
      },
      {
        "min": 0,
        "id": "fail"
      }
    ],
    "total_findings": 17,
    "critical": 2,
    "warnings": 0,
    "tips": 15,
    "unverifiable": 26,
    "categories": [
      {
        "id": "contrast",
        "name": "Color & Contrast",
        "pass": 110,
        "fail": 0,
        "review": 3,
        "state": "scored",
        "score": 100,
        "thin": false
      },
      {
        "id": "keyboard",
        "name": "Keyboard Navigation",
        "pass": 1,
        "fail": 2,
        "review": 0,
        "state": "scored",
        "score": 9,
        "thin": false
      },
      {
        "id": "screenreader",
        "name": "Screen Reader",
        "pass": 21,
        "fail": 0,
        "review": 0,
        "state": "scored",
        "score": 100,
        "thin": false
      },
      {
        "id": "forms",
        "name": "Forms",
        "pass": 0,
        "fail": 0,
        "review": 0,
        "state": "not-applicable",
        "score": null,
        "thin": false
      },
      {
        "id": "responsive",
        "name": "Responsive & Reflow",
        "pass": 1,
        "fail": 0,
        "review": 0,
        "state": "scored",
        "score": 100,
        "thin": true
      },
      {
        "id": "touch",
        "name": "Touch & Targets",
        "pass": 0,
        "fail": 0,
        "review": 17,
        "state": "not-machine-checkable",
        "score": null,
        "thin": false
      },
      {
        "id": "cognitive",
        "name": "Cognitive",
        "pass": 0,
        "fail": 0,
        "review": 3,
        "state": "not-machine-checkable",
        "score": null,
        "thin": false
      },
      {
        "id": "motion",
        "name": "Motion & Animation",
        "pass": 0,
        "fail": 0,
        "review": 0,
        "state": "not-applicable",
        "score": null,
        "thin": false
      },
      {
        "id": "media",
        "name": "Media",
        "pass": 0,
        "fail": 0,
        "review": 3,
        "state": "not-machine-checkable",
        "score": null,
        "thin": false
      },
      {
        "id": "agent",
        "name": "Agent Operability & AEO",
        "pass": 2,
        "fail": 1,
        "review": 0,
        "state": "scored",
        "score": 66,
        "thin": false
      }
    ]
  }
}
--- Tier 1 findings ---
[
  {
    "id": null,
    "category": "keyboard",
    "check": "fail",
    "severity": "critical",
    "title": "Click handler lacks nearby keyboard handling",
    "location": "chiehweihuang.github.io/site.js:20"
  },
  {
    "id": null,
    "category": "keyboard",
    "check": "fail",
    "severity": "critical",
    "title": "Click handler lacks nearby keyboard handling",
    "location": "chiehweihuang.github.io/site.js:29"
  },
  {
    "id": null,
    "category": "agent",
    "check": "fail",
    "severity": "tip",
    "title": "JSON-LD structured data is missing",
    "location": "chiehweihuang.github.io/zh.html"
  },
  {
    "id": null,
    "category": "contrast",
    "check": "review",
    "severity": "tip",
    "title": "Contrast not verified, run Tier 2",
    "location": "site-wide (static scan only)"
  }
]
--- Tier 2 findings ---
[
  {
    "id": null,
    "category": "touch",
    "check": "review",
    "severity": "tip",
    "title": "Touch target 38×44px meets the 24px floor but is below the 44px best practice",
    "location": "body > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > a:nth-child(2) (viewport 320x720)",
    "viewport": "320x720"
  },
  {
    "id": null,
    "category": "touch",
    "check": "review",
    "severity": "tip",
    "title": "Touch target 234×23px meets the 24px floor but is below the 44px best practice",
    "location": "body > main:nth-child(3) > section:nth-child(4) > div:nth-child(2) > article:nth-child(1) > h3:nth-child(2) > a:nth-child(1) (viewport 320x720)",
    "viewport": "320x720"
  },
  {
    "id": null,
    "category": "touch",
    "check": "review",
    "severity": "tip",
    "title": "Touch target 59×23px meets the 24px floor but is below the 44px best practice",
    "location": "body > main:nth-child(3) > section:nth-child(4) > div:nth-child(2) > article:nth-child(2) > h3:nth-child(2) > a:nth-child(1) (viewport 320x720)",
    "viewport": "320x720"
  },
  {
    "id": null,
    "category": "touch",
    "check": "review",
    "severity": "tip",
    "title": "Touch target 96×21px meets the 24px floor but is below the 44px best practice",
    "location": "body > main:nth-child(3) > section:nth-child(4) > p:nth-child(3) > a:nth-child(1) (viewport 320x720)",
    "viewport": "320x720"
  },
  {
    "id": null,
    "category": "touch",
    "check": "review",
    "severity": "tip",
    "title": "Touch target 202×21px meets the 24px floor but is below the 44px best practice",
    "location": "body > main:nth-child(3) > section:nth-child(6) > p:nth-child(3) > a:nth-child(1) (viewport 320x720)",
    "viewport": "320x720"
  },
  {
    "id": null,
    "category": "touch",
    "check": "review",
    "severity": "tip",
    "title": "Touch target 72×20px meets the 24px floor but is below the 44px best practice",
    "location": "body > footer:nth-child(4) > div:nth-child(1) > p:nth-child(2) > a:nth-child(1) (viewport 320x720)",
    "viewport": "320x720"
  },
  {
    "id": null,
    "category": "touch",
    "check": "review",
    "severity": "tip",
    "title": "Touch target 45×20px meets the 24px floor but is below the 44px best practice",
    "location": "body > footer:nth-child(4) > div:nth-child(1) > p:nth-child(2) > a:nth-child(2) (viewport 320x720)",
    "viewport": "320x720"
  },
  {
    "id": null,
    "category": "touch",
    "check": "review",
    "severity": "tip",
    "title": "Touch target 40×45px meets the 24px floor but is below the 44px best practice",
    "location": "body > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > a:nth-child(2) (viewport 1280x900)",
    "viewport": "1280x900"
  },
  {
    "id": null,
    "category": "touch",
    "check": "review",
    "severity": "tip",
    "title": "Touch target 281×27px meets the 24px floor but is below the 44px best practice",
    "location": "body > main:nth-child(3) > section:nth-child(4) > div:nth-child(2) > article:nth-child(1) > h3:nth-child(2) > a:nth-child(1) (viewport 1280x900)",
    "viewport": "1280x900"
  },
  {
    "id": null,
    "category": "touch",
    "check": "review",
    "severity": "tip",
    "title": "Touch target 71×27px meets the 24px floor but is below the 44px best practice",
    "location": "body > main:nth-child(3) > section:nth-child(4) > div:nth-child(2) > article:nth-child(2) > h3:nth-child(2) > a:nth-child(1) (viewport 1280x900)",
    "viewport": "1280x900"
  },
  {
    "id": null,
    "category": "touch",
    "check": "review",
    "severity": "tip",
    "title": "Touch target 108×24px meets the 24px floor but is below the 44px best practice",
    "location": "body > main:nth-child(3) > section:nth-child(4) > p:nth-child(3) > a:nth-child(1) (viewport 1280x900)",
    "viewport": "1280x900"
  },
  {
    "id": null,
    "category": "touch",
    "check": "review",
    "severity": "tip",
    "title": "Touch target 227×24px meets the 24px floor but is below the 44px best practice",
    "location": "body > main:nth-child(3) > section:nth-child(6) > p:nth-child(3) > a:nth-child(1) (viewport 1280x900)",
    "viewport": "1280x900"
  },
  {
    "id": null,
    "category": "touch",
    "check": "review",
    "severity": "tip",
    "title": "Touch target 72×20px meets the 24px floor but is below the 44px best practice",
    "location": "body > footer:nth-child(4) > div:nth-child(1) > p:nth-child(2) > a:nth-child(1) (viewport 1280x900)",
    "viewport": "1280x900"
  },
  {
    "id": null,
    "category": "touch",
    "check": "review",
    "severity": "tip",
    "title": "Touch target 45×20px meets the 24px floor but is below the 44px best practice",
    "location": "body > footer:nth-child(4) > div:nth-child(1) > p:nth-child(2) > a:nth-child(2) (viewport 1280x900)",
    "viewport": "1280x900"
  }
]
```

End of recovered output.
