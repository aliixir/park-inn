//
//  MenuVC.swift
//  ParkInn
//
//  Created by John Hanifzai on 2/18/20.
//  Copyright © 2020 ParkInn. All rights reserved.
//

import UIKit

class MenuVC: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.

    }
    

    @IBAction func settingsPressed(_ sender: Any) {
        // Get the Navigation Controller
        guard let navControl = revealViewController()?.frontViewController as? UINavigationController else { return }

        // Get the MainVC instance to push SettingsVC
        guard let mainVC = navControl.children.first as? MainVC else { return }
        mainVC.performSegue(withIdentifier: "toSettingsVC", sender: nil)
    }
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
