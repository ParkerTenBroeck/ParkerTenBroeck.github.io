+++
title = "My CPU"
description = "A CPU I designed based off a SAP-1 CPU but expanded to be a much more 'capable' 16 bit CPU. THE ISA is about as good as you'd expect"
date = 2018-01-16

[taxonomies]
tags = ["hardware", "logic gates", "highschool"]
category = ["project"]
+++

Take a look at the [GitHub](https://github.com/ParkerTenBroeck/MyCPU_16bit)

| Instruction                               | Opcode | Micro 1 | Micro 2 | Micro 3 | Micro 4 | Micro 5 | Micro 6 | Micro 7 |
| ----------------------------------------- | ------ | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| HALT                                      | FF     | 3000    | 1044000 |         |         |         |         |         |
| HALT if A = B                             | F0     | 3000    | 1044000 |         |         |         |         |         |
| HALT if A < B                             | F1     | 3000    | 1044000 |         |         |         |         |         |
| HALT if A >B                              | F2     | 3000    | 1044000 |         |         |         |         |         |
| Direct CPU control                        | F3     | 3000    | 1044000 |         |         |         |         |         |
| Direct Memory control                     | F4     | 3000    | 1044000 |         |         |         |         |         |
| Memory __ position out to X register      | E0     | 3000    | 1044000 | 30000   | 14000   | 44008   | 800000  |         |
| Memory __ position out to Y register      | E1     | 3000    | 1044000 | 30000   | 14000   | 44020   | 800000  |         |
| Memory __ position out to B register      | E2     | 3000    | 1044000 | 30000   | 14000   | 44200   | 800000  |         |
| Memory __ position out to A register      | E3     | 3000    | 1044000 | 30000   | 14000   | 44080   | 800000  |         |
| Memory __ position in from X register     | E4     | 3000    | 1044000 | 30000   | 14000   | 48010   | 800000  |         |
| Memory __ position in from Y register     | E5     | 3000    | 1044000 | 30000   | 14000   | 48040   | 800000  |         |
| Memory __ position in from B register     | E6     | 3000    | 1044000 | 30000   | 14000   | 48400   | 800000  |         |
| Memory __ position in from A register     | E7     | 3000    | 1044000 | 30000   | 14000   | 48100   | 800000  |         |
| Letter write                              | E8     | 3000    | 1044000 | 2004000 | 800000  |         |         |         |
| Memory __ __ position out to X register   | E9     | 3000    | 1044000 | 30000   | 14000   | 14000   | 44008   |  800000 |
| Memory __ __ position out to B register   | EA     | 3000    | 1044000 | 30000   | 14000   | 14000   | 44200   |  800000 |
| Memory __ __ position out to A register   | EB     | 3000    | 1044000 | 30000   | 14000   | 14000   | 44080   |  800000 |
| Memory __ __ position in from X register  | EC     | 3000    | 1044000 | 30000   | 14000   | 14000   | 48010   |  800000 |
| Memory __ __ position in from B register  | ED     | 3000    | 1044000 | 30000   | 14000   | 14000   | 48400   |  800000 |
| Memory __ __ position in from A register  | EE     | 3000    | 1044000 | 30000   | 14000   | 14000   | 48100   |  800000 |
| Copy Memory __ to __                      | EF     | 3000    | 1044000 |         |         |         |         |         |
| A register out to internal screen         | D0     | 3000    | 1044000 | 1080    | 800000  |         |         |         |
| X register out to internal screen         | D1     | 3000    | 1044000 | 2010    | 800000  |         |         |         |
| Y register out to internal screen         | D2     | 3000    | 1044000 | 2040    | 800000  |         |         |         |
| Memory out to internal screen             | D3     | 3000    | 1044000 | 30000   | 54000   | 6000    |         |         |
| ALU                                       | N/A    |         |         |         |         |         |         |         |
| Addition to A register                    | C0     | 3000    | 1044000 | 81      | 800000  |         |         |         |
| Subtraction to A register                 | C1     | 3000    | 1044000 | 82      | 800000  |         |         |         |
| NOT                                       | C2     | 3000    | 1044000 | 83      | 800000  |         |         |         |
| AND                                       | C3     | 3000    | 1044000 | 84      | 800000  |         |         |         |
| Shift Left to A register                  | C4     | 3000    | 1044000 | 85      | 800000  |         |         |         |
| Shift Right to A register                 | C5     | 3000    | 1044000 | 86      | 800000  |         |         |         |
| OR                                        | C6     | 3000    | 1044000 | 87      | 800000  |         |         |         |
| Jump and remember position                | B0     | 3000    | 1044000 | 30000   | 60800   | 84000   | 800000  |         |
| Jump and remember position if A < B       | B1     | 3000    | 1044000 |         |         |         |         |         |
| Jump and remember position if A > B       | B2     | 3000    | 1044000 |         |         |         |         |         |
| Jump and remember position if A = B       | B3     | 3000    | 1044000 |         |         |         |         |         |
| Jump to jump Register                     | B4     | 3000    | 1044000 | 81000   | 800000  |         |         |         |
| Jump                                      | A0     | 3000    | 1044000 | 30000   | 84000   | 800000  |         |         |
| Jump if carry = 1                         | A1     | 3000    | 1044000 |         |         |         |         |         |
| Jump if A = B                             | A2     | 3000    | 1044000 | 330000  | 384000  | B00000  |         |         |
| Jump if A < B                             | A3     | 3000    | 1044000 |         |         |         |         |         |
| Jump if A > B                             | A4     | 3000    | 1044000 | 230000  | 284000  | A00000  |         |         |
| Jump to A register                        | A5     | 3000    | 1044000 | 80100   | 800000  |         |         |         |
| No Operation                              | 00     | 30000   | 1044000 | 800000  |         |         |         |         |


| Bit | Function |
| --- | --- |
| 31 | NA |
| 30 | NA |
| 29 | NA |
| 28 | NA |
| 27 | NA |
| 26 | NA |
| 25 | NA |
| 24 | Instruction Register In |
| 23 | Micro Instruction Counter Reset |
| 22 | Conditional Instruction Type Select Bit 3 |
| 21 | Conditional Instruction Type Select Bit 2 |
| 20 | Conditional Instruction Type Select Bit 1 |
| 19 | Program Counter In |
| 18 | Program Counter Count |
| 17 | Program Counter Out |
| 16 | Update Memory Address Register |
| 15 | Memory In |
| 14 | Memory Out |
| 13 | Internal Screen Register In |
| 12 | Jump Register Out |
| 11 | Jump Register In |
| 10 | B Register Out |
| 9 | B Register In |
| 8 | A Register Out |
| 7 | A Register In |
| 6 | Y Register Out |
| 5 | Y Register In |
| 4 | X Register Out |
| 3 | X Register In |
| 2 | ALU mode select bit 3 |
| 1 | ALU mode select bit 2 |
| 0 | ALU mode select bit 1 |
