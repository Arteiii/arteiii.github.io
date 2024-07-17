---
sidebar_position: 1
sidebar_label: Formulas
---

# Computer Architecture Formulas

## Formulas

1. CPU *time* = Instruction count $$\times$$ Clock Cycles per instruction $$\times$$ Clock cycle time
2. $$X \text{ is } n \text{ times faster than } Y: n = \text{Execution time}_y / \text{ Execution time}_x = \text{Performance}_x / \text{ Performance}_y$$
3. Amdahl's Law:

   $$\text{Speedup}_{overall} = \frac{\text{Execution time}_{old}}{\text{Execution time}_{new}} = \frac{1}{\lparen 1 - \text{Fraction}_{enhanced}\rparen + \frac{\text{Speedup}_{enhanced}}{\text{Fraction}_{enhanced}}}$$

4. $$\text{Energy}_{dynamic}\space\alpha\space 1 / 2 \times \text{Capacitive load} \times \text{Voltage}^2$$
5. $$\text{Power}_{dynamic}\space\alpha\space 1 / 2 \times \text{Capacitive load} \times \text{Voltage}^2 \times \text{Frequency switched}$$
6. $$\text{Power}_{static}\space\alpha\space \text{Current}_{static} \times \text{Voltage}$$
7. Availability = Mean time to fail / (Mean time to fail + Mean time to repair)
8. Die yield = $$\text{Wafer yield} \times \frac{1} {\lparen 1 + \text{Defects per unit area}\times \text{Die
   area}\rparen ^N}$$  

   where Wafer yield accounts for wafer that are so bad they need not be tested and $$N$$ is a parameter called the
   process-complexity factor, a measure of manufacturing difficulty.
   $$N$$ ranges from 11.5 to 15.5 for a 40nm process (in 2010).
9. Means - arithmetic (AM), weighted arithmetic (WAM), and geometric (GM):  

   $$\text{AM} = \frac{1}{n} \sum\limits_{i=1}^{N} \text{Time}_{i}$$

   $$\text{WAM} = \frac{1}{n} \sum\limits_{i=1}^{N} \text{Weight}_{i} \times \text{Time}_{i} $$

   $$\text{GM} = \sqrt[n]{\prod\limits_{i=1}^{N} \text{Time}_{i}}$$

   where $$\text{Time}_i$$ is the execution time for the $$i$$th program of a total of $$n$$ in the workload,
   $$\text{Weight}_i$$ is the weighting of the $$i$$th program in the workload.
10. Average memory-access time $$= \text{Hit time} + \text{Miss rate} \times \text{Miss Penalty}$$
11. Misses per instructions $$= \text{Miss rate} \times \text{Memory access per instruction}$$
12. Cache index size: $$2^{index} = \text{Cache size} / \lparen\text{Block size} \times \text{Set
    associativity}\rparen$$

13. Power Utilization Effectiveness (PUE) of a Warehouse Scale Computer $$= \frac{\text{Total Facility Power}}{\text{IT
    Equipment Power}}$$

## Rules of Thumb

### Amdahl/Case Rule

> A balanced computer system needs about 1 MB of the main memory capacity and 1 megabit per second of I/O
> bandwidth per MIPs of CPU performance.

### 90/10 Locality Rule

> A program executes about 90% of its instructions in 10% of its code.

### Bandwidth Rule

> Bandwidth grows by at least the square of the improvement in latency.

### 2:1 Cache Rule

> The miss rate of a direct-mapped cache of size $$N$$ is about the same as a two-way set-associative
> cache of size $$\frac{N}{2}$$.

### Dependability Rule

> Design with no single point of failure.
