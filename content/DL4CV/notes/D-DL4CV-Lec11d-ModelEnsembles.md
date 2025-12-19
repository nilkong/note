---
type: digest
aliases: Model Ensembles
source_link: "[[D-DL4CV-Lec11-TrainingNeuralNetworksII]]"
tags:
---
# Basic Idea

1. Train multiple independent models
2. At test time average their results to give final result

---
# Snapshot Ensembles
![[D-DL4CV-Lec11d-ModelEnsembles-snapshot-ensembles.png]]
## Core Concept

Instead of training multiple models, now we want to use several snapshots from one training process instead of training independent model

The idea is that in training process, we might occur several local minima, every snapshot is expected to represent one local minima

## How we make every snapshot one local minima?

Every time after we store a snapshot, we reset the learning rate decay back to $t=0$. The learning rate will become large again, and will likely escape from the local minima and find the next local minima

---
# Polyak Averaging

Instead of using the actual parameter vector from snapshot with best validation accuracy, we want to make every snapshot's parameter vector contribute to the final parameter vector which we'll use in test time

e.g.
```python
while True:
    data_batch = dataset.sample_data_batch()
    loss = network.forward(data_batch)
    dx = network.backward()
    x += - learning_rate * dx
    x_test = 0.995*x_test + 0.005*x # use for test set
```

`x` is the current model parameters, and we make every snapshot contribute to the final parameters, making `x` smoother