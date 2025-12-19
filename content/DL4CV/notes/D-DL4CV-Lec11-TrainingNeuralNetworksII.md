---
type: digest
aliases: Training Neural Network II
source_link: "[[D-DL4CV-Lec10-TrainingNeuralNetworksI]]"
tags:
---
# Training Dynamics
## Learning Rate Schedule

> This section introduce ways to adjust learning rate while training

- [[D-DL4CV-Lec11a-LearningRateSchedule]]

## Choosing Hyperparameters
### Grid Search & Random Search

> This section introduce grid search and random search, which are two ways of deciding which sets of hyperparameters should I choose

- [[D-DL4CV-Lec11b-Grid_and_Random_Search]]

### Choose Hyperparameters without tons of GPUs

> Most of the time, we have limited GPU resources, thus we need a smart way of finding suitable hyperparameters using the smallest amount of time
> This section the lecturer introduces his way of finding hyperparameters

- [[D-DL4CV-Lec11c-ChooseHyperparametersWithoutGPUs]]

## After Training
### Model Ensembles

> Sometimes we can you multiple models then average their results to make better predictions. Here we introduce different way to accomplish this medthod

- [[D-DL4CV-Lec11d-ModelEnsembles]]

### Transfer Learning

> We don't need to train a new model for every new dataset. Instead, we can use the model trained on similar dataset, then just fine-tune the model to fit our new dataset

- [[D-DL4CV-Lec11e-TransferLearning]]

### Distributed Training

> When we can use many GPUs, how do we distribute tasks to different GPUs? This section introduce ways we distribute tasks to multiple GPUs to reduce training time

- [[D-DL4CV-Lec11f-DistributedTraining]]