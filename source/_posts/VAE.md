---
title: VAE
date: 2020-04-03 10:15:29
tags:
mathjax: true
---

# The questions in VAE

Recently, I had just read a paper regarding the hyperspectral anomaly detection which integrates the technique of  VAE and GAN. The VAE algorithm may work as well when implemented single

## 1. Why we choose the cross-entropy loss as our reconstruction error？

​	As we know, the MSE error is utilized in normal autoencoders, which computes the Euclidean distance between the original data and the reconstructed data. However, considering the specific hand-writing MNIST dataset, minor errors in the position where the digits appear is allowed since each individual own unique writing styles. However, the position of these digits are forced to converge to a specific area which is not our expectation. The cross entropy loss can well address the issue.

## 2. The deduction of VAE loss function



## 3. Why we select the probabilistic distribution feature as the input sample of the random walk process?

​	There exists a sampling process during the generation of z. We can see in the formula $ z = \mu + \sigma *  \bold \epsilon$ , where $\epsilon$ is sampled from $N \sim (0,1)$. 

## 4. How to compute the Wasserstein distance between two multivariate Gaussian distributions



