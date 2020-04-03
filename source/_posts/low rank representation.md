---
layout: low
title: low rank representation
date: 2019-09-17 20:03:52
categories:
- 稀疏低秩表示
tags:
- 低秩表示
- RPCA
mathjax: true

---

#  The discriminations between the Low rank representation method and RPCA method

## 1. The representation difference

 	The RPCA prototype can be formulated by :
$$
\min _{D, E} \operatorname{rank}(D)+\lambda\|E\|_{\ell}, \quad \text { s.t. } \quad X=D+E
$$
Our purpose is to recover the matrix   $$D$$  from the original data matrix while $$E$$  indicates the representation error, the less the $$E$$  is, the more accurate the prototype performs.  We try to seek a low rank representation of  $$D$$  which implicitly manifests the samples drawn from the data lie in a single subspace, but the condition is usually  difficult to satisfy. Give a simple example,

​	The low rank representation model can be specified by:
$$
\min _{Z, E} \operatorname{rank}(D)+\lambda\|E\|_{\ell}, \quad \text { s.t. } \quad X=AZ+E
$$




