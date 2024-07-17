---
sidebar_position: 2
sidebar_label: Open Source Licenses
---

# Open Source Licenses


:::warning Key Points to Remember
- **Permissive Licenses (e.g., MIT, Apache, BSD):** Allow proprietary use of the software with minimal restrictions.
- **Copyleft Licenses (e.g., GPL, MPL, EPL):** Require derivative works to be released under the same license.
- **Attribution and Notice Requirements:** Common in most licenses, ensuring original authors get credit.
- **Patent Grants (e.g., Apache):** Some licenses include explicit patent rights.
:::


:::danger Disclaimer
For a full list of open source licenses, please visit [SPDX](https://spdx.org/licenses/) or [OSI](https://opensource.org/licenses)

**The information provided here is for general guidance only and should not be considered legal advice.
Please consult with a legal professional and double-check the details to ensure compliance with the specific terms of each license.**
:::


### MIT License

A highly permissive license that allows for extensive freedom in the use, modification, and distribution of software.

[MIT License](https://spdx.org/licenses/MIT.html)

**For Your Project:**

- **Usage:** You can use, modify, and distribute your software freely.
- **Obligations:** You must include the original copyright notice and license text in all copies or substantial portions
  of the software.

**For Using a Project:**

- **Usage:** You can freely use, modify, and distribute software licensed under the MIT License.
- **Obligations:** You must retain the original copyright notice and license text.

**Other Info:**

- The MIT License is permissive and does not require you to open-source your modifications.

### GNU General Public License (GPL)

A strong copyleft license that ensures all derivative works remain open-source and freely available to the public.

[GNU General Public License v3.0 or later](https://spdx.org/licenses/GPL-3.0-or-later.html)

**For Your Project:**

- **Usage:** You can use and modify the software.
- **Obligations:** If you distribute your modified version, you must also distribute the source code under the same GPL
  license.
- **Copyleft:** Your project must also be open-sourced under the GPL if you use GPL-licensed code.

**For Using a Project:**

- **Usage:** You can use and modify GPL-licensed software.
- **Obligations:** If you distribute the software or any derivative works, you must provide the source code and license
  it under the GPL.

**Other Info:**

- The GPL ensures that derivative works remain open-source and free to use.

### GNU Affero General Public License (AGPL)

AGPL is suitable if you want to ensure that all changes to your software, including those used in a networked service,
are shared with the community.

[GNU Affero General Public License v3.0 or later](https://spdx.org/licenses/AGPL-3.0-or-later.html)

**For Your Project:**

- **Usage:** You can use, modify, and distribute the software.
- **Obligations:** If you distribute the software or make it available to users over a network, you must also make the
  source code available under the AGPL.
- **Copyleft:** Your project must also be open-sourced under the AGPL if you use AGPL-licensed code.

**For Using a Project:**

- **Usage:** You can freely use, modify, and distribute AGPL-licensed software.
- **Obligations:** If you distribute the software or make it available over a network, you must provide the source code
  and license it under the AGPL.

**Other Info:**

- **Network Use Clause:** The key difference between AGPL and GPL is the network use provision. If you modify AGPL
  software and let users interact with it over a network (e.g., a web application), you must provide the source code to
  those users.
- **Ideal for SaaS:** AGPL is often chosen for software used in Software as a Service (SaaS) environments to ensure that
  modifications to the software are shared with the community.

- **Transparency:** Ensures that end-users can access the source code of the software they are interacting with, even if
  it's only accessed over a network.

:::tip
AGPL is compatible with GPL.  
You can combine AGPL and GPL code, but the combined work must be licensed under AGPL.
:::

### Apache License 2.0

A permissive license that provides an express grant of patent rights from contributors to users, while not requiring
derivative works to be open-sourced.

[Apache License 2.0](https://spdx.org/licenses/Apache-2.0.html)

**For Your Project:**

- **Usage:** You can use, modify, and distribute your software.
- **Obligations:** You must include a copy of the license, provide a NOTICE file with attributions, and state any
  changes made to the code.

**For Using a Project:**

- **Usage:** You can freely use, modify, and distribute Apache-licensed software.
- **Obligations:** You must retain the original copyright, include a copy of the license, and provide a NOTICE file.

**Other Info:**

- It provides an express grant of patent rights from contributors to users.
- It does not require derivative works to be open-sourced.

### BSD License

A family of permissive licenses with minimal restrictions on reuse, including the 2-Clause and 3-Clause variants.

[BSD 3-Clause No Military License](https://spdx.org/licenses/BSD-3-Clause-No-Military-License.html)

**For Your Project:**

- **Usage:** You can use, modify, and distribute your software.
- **Obligations:** You must include the original copyright notice and disclaimers.

**For Using a Project:**

- **Usage:** You can freely use, modify, and distribute BSD-licensed software.
- **Obligations:** You must retain the original copyright notice and disclaimers.

**Other Info:**

- There are two variants: the 3-Clause BSD License (more common) and the 2-Clause BSD License (simpler).

### Mozilla Public License 2.0 (MPL)

A file-level copyleft license that requires modified files to be open-sourced, while allowing combination with
proprietary code.

[Mozilla Public License 2.0](https://spdx.org/licenses/MPL-2.0.html)

**For Your Project:**

- **Usage:** You can use and modify the software.
- **Obligations:** If you distribute modified files, you must make them available under the MPL.
- **File-level Copyleft:** Only modified files need to be open-sourced.

**For Using a Project:**

- **Usage:** You can freely use and modify MPL-licensed software.
- **Obligations:** If you distribute modified files, you must provide the source code for those files.

**Other Info:**

- MPL is less restrictive than GPL and applies copyleft at the file level.

### Creative Commons Licenses (CC0, CC BY, CC BY-SA)

A set of licenses for creative works, with varying levels of restrictions, from public domain dedication to share-alike
requirements.

[Creative Commons Attribution 4.0 International](https://spdx.org/licenses/CC-BY-4.0.html)

**For Your Project:**

- **Usage:** These are typically used for creative works rather than software.
- **Obligations:** Vary depending on the specific CC license:
    - **CC0:** No obligations, effectively public domain.
    - **CC BY:** Must provide attribution.
    - **CC BY-SA:** Must provide attribution and license derivatives under the same terms.

**For Using a Project:**

- **Usage:** Freely use, modify, and distribute works under CC licenses.
- **Obligations:** Follow specific license requirements (e.g., attribution, share-alike).

**Other Info:**

- CC licenses are popular for documentation, images, and other non-software content.

### Eclipse Public License (EPL)

A weak copyleft license that requires modified versions of the software to be open-sourced under the EPL.

[Eclipse Public License 2.0](https://spdx.org/licenses/EPL-2.0.html)

**For Your Project:**

- **Usage:** You can use, modify, and distribute the software.
- **Obligations:** If you distribute modified versions, you must make the source code available under the EPL.

**For Using a Project:**

- **Usage:** You can freely use and modify EPL-licensed software.
- **Obligations:** If you distribute modified versions, you must provide the source code under the EPL.

**Other Info:**

- Similar to MPL but with stronger copyleft requirements.


