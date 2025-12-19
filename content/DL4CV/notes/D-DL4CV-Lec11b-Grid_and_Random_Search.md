---
type: digest
aliases: Grid Search & Random Search
source_link: "[[D-DL4CV-Lec11-TrainingNeuralNetworksII]]"
tags:
---
![[D-DL4CV-Lec11b-Grid_and_Random_Search-vs.png]]
# Grid Search

**Strategy:** Choose specific values for each hyperparameter (typically log-spaced), then test every possible combination.

**Example:** Learning rate = $[0.1, 0.01, 0.001]$, Batch size = $[16, 32, 64]$
→ Total combinations = 3 × 3 = 9 trials

**Limitations:**

- **Exponential growth**: $m$ values × $n$ parameters = $m^n$ combinations
- **Limited exploration**: Only $m$ values tested per parameter
- **Inefficient**: Many resources wasted on unimportant parameter combinations

---
# Random Search

**Strategy:** Define ranges for each hyperparameter, then randomly sample values within those ranges for each trial.

**Example:** Learning rate $\in [0.001, 0.1]$, Batch size $\in [16, 64]$
→ Each trial samples random values from these ranges

**Advantages:**

- **Better coverage**: More diverse values tested per parameter
- **Finds important parameters**: Automatically focuses on parameters that actually matter
- **Flexible**: Can run as many trials as time/budget allows

---
# Key Takeaway

Random search often outperforms grid search because it explores the hyperparameter space more effectively, especially when only a few parameters significantly impact performance.