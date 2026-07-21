# Cantilever Bracket FEA Validation

## Purpose

Validate a 6061-T6 aluminum cantilever benchmark in ANSYS Mechanical, then compare the result with Fusion 360 Simulation and closed-form Euler-Bernoulli beam calculations. This is a standalone design-analysis study, not a claim about a previously fabricated part.

## Validated model

- Material inputs: 6061-T6 aluminum, density 2700 kg/m^3, Young's modulus 68.9 GPa, Poisson's ratio 0.33
- Geometry: rectangular cantilever, 170.053 mm span, 29.388 mm height, 6.35 mm thickness
- Load case: one 186.61 mm^2 end face fixed, 444.82 N downward force distributed on the opposite free-end edge
- Solvers: ANSYS Mechanical Student 2025 R2 and Autodesk Fusion Static Stress

## Verified results

- ANSYS maximum von Mises stress: 85.94 MPa
- ANSYS maximum total displacement: 0.822 mm
- ANSYS yield safety factor: 3.21, using a 276 MPa yield-strength reference
- Fusion cross-check: 80.13 MPa maximum von Mises stress and 0.796 mm maximum displacement

The high stress occurs at the fixed end, and the maximum displacement occurs at the loaded free end, which matches the expected cantilever response.

## Analytical comparison

Using P = 444.82 N, L = 170.053 mm, h = 29.388 mm, b = 6.35 mm, and E = 68.9 GPa:

- Area moment of inertia: I = b*h^3/12
- Bending stress: sigma = P*L*(h/2)/I = 82.76 MPa
- Tip displacement: delta = P*L^3/(3*E*I) = 0.788 mm

| Metric | Analytical | ANSYS | Fusion 360 |
| --- | ---: | ---: | ---: |
| Maximum von Mises stress | 82.76 MPa | 85.94 MPa | 80.13 MPa |
| Maximum tip displacement | 0.788 mm | 0.822 mm | 0.796 mm |

ANSYS differs from the hand-calculation stress by 3.8% and displacement by 4.4%. Fusion differs from ANSYS by 7.2% for stress and 3.3% for displacement. The agreement supports the boundary-condition and load setup while showing expected solver and load-distribution differences.

## Evidence captured

1. ANSYS Mechanical model with a fixed end and 444.82 N downward free-end edge load
2. ANSYS equivalent stress contour, maximum 85.94 MPa
3. ANSYS total deformation contour, maximum 0.822 mm
4. Fusion 360 cross-check, 80.13 MPa maximum stress and 0.796 mm maximum displacement
5. Euler-Bernoulli comparison using measured geometry, with 3.8% stress and 4.4% displacement differences

## Resume rule

The model is solved and the comparison is documented. A resume bullet may now describe this study truthfully.
