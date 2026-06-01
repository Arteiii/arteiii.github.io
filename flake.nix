{
  description = "Docusaurus dev env";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_22
          yarn
          typescript-language-server
          vscode-langservers-extracted
          marksman
        ];
	shellHook = ''
          echo -e "\n\033[1;34m[arteii.net]\033[0m Development environment active."
          echo -e "Node: \033[1;32m$(node -v)\033[0m | Yarn: \033[1;32m$(yarn -v)\033[0m"
          echo -e "\033[1;33mCommands:\033[0m yarn [start | build | serve | deploy | upgrade:docusaurus]\n"
        '';
      };
    };
}
