---
created: 2025-04-19
confidence level: low
review count: 0
---
## Intro
NumPy is a python library that extends python with more numeric types, vectors, matrices, and many matrix functions. Python arithmetic operators work on NumPy data types and many NumPy functions will accept python data types.

## Vectors
Vectors in the context of NumPy are an ordered array of numbers. The elements of a vector are all of the same type. The number of elements in a vector is often referred to as the _dimension_ or _rank_. A vector can also be thought of as a one-dimensional array.

## NumPy Arrays
NumPy's basic data structure is an indexable, n-dimensional array containing elements of the same type (`dtype`). Dimension in the context of NumPy arrays refers to the number of indexes of an array. A one-dimensional array has one index.
+ 1-D array, shape (n,): n elements indexed \[0] through \[n-1].

## Data Creation
+ `numpy.zeros()`: creates an array using a shape argument (one number for a 1-D array or shape tuple) and fills the array with zeros.
+ `numpy.random.random_sample()`: uses same arguments as `numpy.zeros` to create arrays and fills the array with random values.
+ `numpy.arange()`: creates a 1-D array and fills it with integers from a starting value, if two arguments are provided (or zero if one argument) to a max value. the difference between each number can be provided with a third argument. does not take a shape tuple.
+ `numpy.random.rand()`: creates a 1-D array and fills it with random numbers within a specified range.
+ `numpy.array()`: takes a python list as an argument and turns it into a NumPy array.

## Operations
+ NumPy arrays can be indexed sliced like regular python lists.

## Single Array Operations
```python
a = np.array([1, 2, 3, 4])
b = -a                      # negates the elements of a
b = np.sum(a)               # sums all elements of a, returns a scalar 
b = np.mean(a)              # finds mean of all elements of a
b = a**2                    # squares all elements of a
```
**Note**: these operations also work on multi-dimensional arrays.

## Array - Array Elements-wise Operations
```python
a = np.array([1, 2, 3, 4])
b = np.array([-1, -2, 3, 4])
c = a + b                        # c_i = a_i + b_i
```
**Note**: For this to work correctly, the arrays must be of the same size.

## Scalar-Array Operations
Vectors can be 'scaled' by scalar operations. A scalar is just a number. The scalar multiplies all the elements of a vector.

## Broadcasting
This is a mechanism that allows for element-wise operations on arrays of different shapes. When performing operations like addition between two vectors (or arrays), NumPy automatically expands the smaller array to match the larger array, enabling element-wise operations without the need for explicit replication of data. Broadcasting follows a set of rules for aligning the shapes of the arrays involved:
1. If the arrays have a different number of dimensions, the shape of the smaller dimensional array is padded with ones on the left side until both shapes are the same.
2. If the sizes of the dimensions are different, the array with size 1 in that dimension is stretched to match the size of the other array.
3. If the sizes of the dimensions are incompatible (i.e. neither is 1 and they are not the same), broadcasting fails, and an error is raised

## Further  Reading